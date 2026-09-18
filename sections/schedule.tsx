import { ArrowUpRight, MapPin } from 'lucide-react';
import { SectionHeading, DemoNote } from '@/components/editorial';
import type { ShowEvent } from '@/types/content';
export function Schedule({ events }: { events: ShowEvent[] }) {
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
      </SectionHeading>
      <div className="schedule-intro">
        <span className="status-dot" />
        <p>Agenda oficial em preparação. Novas datas serão publicadas aqui.</p>
      </div>
      <div className="schedule-list">
        {events.map((event) => {
          const date = event.date ? new Date(`${event.date}T12:00:00`) : null;
          return (
            <article className="show-row" key={event.id}>
              <div className="show-date">
                <strong>
                  {date ? date.getDate().toString().padStart(2, '0') : '—'}
                </strong>
                <span>
                  {date
                    ? date.toLocaleDateString('pt-BR', { month: 'short' })
                    : 'EM BREVE'}
                </span>
              </div>
              <div className="show-place">
                <h3>
                  {event.city}
                  {event.state !== '—' ? ` / ${event.state}` : ''}
                </h3>
                <p>
                  <MapPin size={13} />
                  {event.venue}
                  {event.time ? ` · ${event.time}` : ''}
                </p>
              </div>
              <div className="show-details">
                {event.demonstration ? (
                  <span className="demo-badge">DEMONSTRAÇÃO</span>
                ) : (
                  <span>SHOW</span>
                )}
                <p>{event.details}</p>
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
              ) : (
                <span className="unavailable">
                  {event.demonstration
                    ? 'SEM VENDA DE INGRESSOS'
                    : 'INFORMAÇÕES EM BREVE'}
                </span>
              )}
            </article>
          );
        })}
      </div>
      <DemoNote>
        A linha acima demonstra o formato da agenda e não anuncia um evento
        real.
      </DemoNote>
    </section>
  );
}
