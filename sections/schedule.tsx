import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/editorial';
import type { ShowEvent } from '@/types/content';
import {
  isShowsCalendarConfigured,
  upcomingShows,
} from '@/lib/shows';

export function Schedule({
  events,
  showAllLink = false,
}: {
  events: ShowEvent[];
  showAllLink?: boolean;
}) {
  const confirmedEvents = upcomingShows(events);
  const visibleEvents = showAllLink ? confirmedEvents.slice(0, 4) : confirmedEvents;
  const calendarConfigured = isShowsCalendarConfigured();
  return (
    <section id="agenda" className="section schedule">
      <SectionHeading
        number="05"
        label="NOS ENCONTRAMOS NO PALCO"
        title={
          <>
            O próximo <em>encontro.</em>
          </>
        }
      >
        <a className="text-link" href="#contato">
          LEVE WALDONYS AO SEU EVENTO <ArrowUpRight size={16} />
        </a>
        {showAllLink && (
          <Link className="text-link" href="/agenda">
            ABRIR A AGENDA COMPLETA <ArrowUpRight size={16} />
          </Link>
        )}
      </SectionHeading>
      <div className="schedule-intro">
        <span className="status-dot" />
        <p>
          {confirmedEvents.length
            ? 'Confira as próximas datas confirmadas.'
            : calendarConfigured
              ? 'Nenhuma data confirmada para divulgação no momento.'
              : 'Agenda oficial em preparação. Novas datas serão publicadas aqui.'}
        </p>
      </div>
      <div className="schedule-list">
        {visibleEvents.length ? visibleEvents.map((event) => {
          const date = new Date(`${event.date}T12:00:00`);
          return (
            <article className="show-row" key={event.id}>
              <time className="show-date" dateTime={event.date}>
                <strong>{date.getDate().toString().padStart(2, '0')}</strong>
                <span>{date.toLocaleDateString('pt-BR', { month: 'short' })}</span>
              </time>
              <div className="show-place">
                <h3>{event.title}</h3>
                {(event.location || event.time) && (
                  <p>
                    {event.location && <><MapPin size={13} />{event.location}</>}
                    {event.time && ` · ${event.time}`}
                  </p>
                )}
              </div>
              <div className="show-details">
                <span>SHOW</span>
                {event.details && <p>{event.details}</p>}
              </div>
              {event.ticketUrl ? (
                <a
                  className="text-link"
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INGRESSOS <ArrowUpRight size={16} />
                </a>
              ) : <span className="unavailable">SHOW CONFIRMADO</span>}
            </article>
          );
        }) : (
          <p className="schedule-empty">
            {calendarConfigured
              ? 'Volte em breve para conferir as próximas datas.'
              : 'As próximas datas serão divulgadas aqui quando estiverem confirmadas.'}
          </p>
        )}
      </div>
    </section>
  );
}
