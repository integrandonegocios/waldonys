import type { ShowEvent } from '@/types/content';

const calendarHost = 'calendar.google.com';

export function isShowsCalendarConfigured() {
  return Boolean(process.env.SHOWS_ICAL_URL);
}

function unfoldCalendar(text: string) {
  return text
    .replace(/\r?\n[ \t]/g, '')
    .split(/\r?\n/);
}

function property(lines: string[], name: string) {
  const line = lines.find(
    (entry) => entry.slice(0, entry.indexOf(':')).split(';')[0] === name,
  );
  if (!line) return null;
  const separator = line.indexOf(':');
  if (separator < 0) return null;
  return { params: line.slice(0, separator), value: line.slice(separator + 1) };
}

function unescapeCalendarText(value: string) {
  return value
    .replace(/\\[nN]/g, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function httpsUrl(value: string | undefined) {
  if (!value) return null;
  try {
    const candidate = new URL(value.trim().replace(/[),.;]+$/, ''));
    return candidate.protocol === 'https:' ? candidate.href : null;
  } catch {
    return null;
  }
}

function descriptionContent(value: string | undefined, calendarUrl?: string) {
  const description = value ? unescapeCalendarText(value) : '';
  const plainTicket = description.match(
    /(?:ingressos?|tickets?)[ \t]*:[ \t]*(https:\/\/[^\s<]+)/i,
  );
  const ticketAnchor = [...description.matchAll(
    /<a\b[^>]*href=["'](https:\/\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
  )].find((match) => {
    const before = description.slice(Math.max(0, (match.index ?? 0) - 100), match.index);
    return /ingressos?|tickets?/i.test(`${before} ${match[2]}`);
  });
  const ticketUrl = httpsUrl(calendarUrl)
    ?? httpsUrl(plainTicket?.[1])
    ?? httpsUrl(ticketAnchor?.[1]);
  const readableDescription = description
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(?:p|div|li)>/gi, '\n')
    .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");
  const details = (ticketUrl
    ? readableDescription.replace(
        /^[ \t]*(?:ingressos?|tickets?)[ \t]*:?[\t ]*[^\n]*(?:\n|$)/gim,
        '',
      )
    : readableDescription
  ).replace(/\n{3,}/g, '\n\n').trim();
  return { details, ticketUrl };
}

function fortalezaDateTime(date: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Fortaleza',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  );
  return {
    date: `${values.year}-${values.month}-${values.day}`,
    time: `${values.hour}:${values.minute}`,
  };
}

function parseStart(value: { params: string; value: string }) {
  const isDateOnly = /(?:^|;)VALUE=DATE(?:;|$)/i.test(value.params);
  const match = value.value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/);
  if (!match) return null;

  const [, year, month, day, hour, minute, second, utc] = match;
  if (isDateOnly || !hour || !minute) {
    return { date: `${year}-${month}-${day}`, time: null };
  }
  if (utc) {
    return fortalezaDateTime(
      new Date(`${year}-${month}-${day}T${hour}:${minute}:${second ?? '00'}Z`),
    );
  }
  return { date: `${year}-${month}-${day}`, time: `${hour}:${minute}` };
}

function eventFromLines(lines: string[]): ShowEvent | null {
  const status = property(lines, 'STATUS')?.value.toUpperCase();
  const start = property(lines, 'DTSTART');
  const title = property(lines, 'SUMMARY')?.value;
  const location = property(lines, 'LOCATION')?.value;
  const description = property(lines, 'DESCRIPTION')?.value;
  if (status === 'CANCELLED' || !start || !title) return null;

  const parsedStart = parseStart(start);
  if (!parsedStart) return null;
  const { details, ticketUrl } = descriptionContent(
    description,
    property(lines, 'URL')?.value,
  );

  return {
    id: property(lines, 'UID')?.value || `${parsedStart.date}-${title}`,
    date: parsedStart.date,
    time: parsedStart.time,
    title: unescapeCalendarText(title),
    location: location ? unescapeCalendarText(location) : null,
    details,
    ticketUrl,
  };
}

export function parsePublicCalendar(text: string): ShowEvent[] {
  const events: ShowEvent[] = [];
  let current: string[] | null = null;
  for (const line of unfoldCalendar(text)) {
    if (line === 'BEGIN:VEVENT') current = [];
    else if (line === 'END:VEVENT' && current) {
      const event = eventFromLines(current);
      if (event) events.push(event);
      current = null;
    } else if (current) current.push(line);
  }
  return events;
}

function fortalezaNow(now: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Fortaleza',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return {
    date: `${values.year}-${values.month}-${values.day}`,
    time: `${values.hour}:${values.minute}`,
  };
}

export function upcomingShows(events: ShowEvent[], now = new Date()) {
  const current = fortalezaNow(now);
  return events
    .filter((event) =>
      event.date > current.date ||
      (event.date === current.date && (!event.time || event.time >= current.time)),
    )
    .sort((a, b) =>
      `${a.date}T${a.time ?? '00:00'}`.localeCompare(`${b.date}T${b.time ?? '00:00'}`),
    );
}

export async function getShows(): Promise<ShowEvent[]> {
  const configuredFeed = process.env.SHOWS_ICAL_URL;
  if (!configuredFeed) return [];

  try {
    const feedUrl = new URL(configuredFeed);
    if (
      feedUrl.protocol !== 'https:' ||
      feedUrl.hostname !== calendarHost ||
      !feedUrl.pathname.endsWith('.ics')
    ) {
      console.error('SHOWS_CALENDAR_URL_INVALID');
      return [];
    }
    const response = await fetch(feedUrl, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Calendar request failed: ${response.status}`);
    return upcomingShows(parsePublicCalendar(await response.text()));
  } catch {
    console.error('SHOWS_CALENDAR_UNAVAILABLE');
    return [];
  }
}
