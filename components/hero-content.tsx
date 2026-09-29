import { Play, Camera, Music2, CalendarDays, ArrowUpRight } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { site } from '@/data/site';
import { spotifyEmbedUrl, youtubeEmbedUrl } from '@/lib/integrations/platforms';
import type { ShowEvent } from '@/types/content';

export function HeroContent({ events }: { events: ShowEvent[] }) {
  const spotify = spotifyEmbedUrl(site.media.spotifyUrl);
  const youtube = youtubeEmbedUrl(site.media.youtubeId);
  const upcoming = events.filter((event) => !event.demonstration && event.date).slice(0, 3);
  const displayShows = upcoming.length ? upcoming : [
    { id: 'demo-1', date: '2026-05-24', city: 'Fortaleza', state: 'CE', venue: 'Arraiá do Povo', time: null, details: '', ticketUrl: null, demonstration: true },
    { id: 'demo-2', date: '2026-06-07', city: 'Recife', state: 'PE', venue: 'São João na Roça', time: null, details: '', ticketUrl: null, demonstration: true },
    { id: 'demo-3', date: '2026-06-15', city: 'Salvador', state: 'BA', venue: 'Forró na Praça', time: null, details: '', ticketUrl: null, demonstration: true },
  ];
  const socials = [
    { name: 'Instagram', url: site.socials.instagram, Icon: Camera },
    { name: 'YouTube', url: site.socials.youtube, Icon: FaYoutube },
    { name: 'Spotify', url: site.socials.spotify, Icon: Music2 },
  ];
  return (
    <div className="hero-live-content">
      <div className="hero-pitch">
        <p className="eyebrow">WALDONYS</p>
        <h1 id="banner-title">A sanfona<br /><em>ganhou asas</em></h1>
        <p className="hero-tagline">Do Ceará para o Mundo,<br /><strong>uma história feita de música, paixão e liberdade.</strong></p>
        <div className="hero-listen-row">
          <a className="hero-listen" href="#hero-player"><Play size={17} fill="currentColor" /> OUÇA AGORA</a>
          <nav className="hero-networks" aria-label="Redes sociais">
            {socials.map(({ name, url, Icon }) => url ? (
              <a key={name} href={url} aria-label={name} target="_blank" rel="noopener noreferrer"><Icon size={19} /></a>
            ) : (
              <span key={name} aria-label={`${name}: link em breve`} title={`${name}: link em breve`}><Icon size={19} /></span>
            ))}
          </nav>
        </div>
      </div>
      <div className="hero-bottom-cards">
        <section id="hero-player" className="hero-player-card" aria-labelledby="hero-player-title" tabIndex={-1}>
          <h2 id="hero-player-title">TOCANDO AGORA</h2>
          <p className="hero-current-track">Anjo Querubim <span>· Waldonys</span></p>
          {spotify ? (
            <iframe src={spotify} title="Anjo Querubim — Waldonys no Spotify" width="100%" height={152} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
          ) : youtube ? (
            <iframe
              className="video-frame"
              src={`${youtube}?playsinline=1&controls=1`}
              title="Anjo Querubim — Waldonys no YouTube"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : <p>Ouça a música no canal oficial.</p>}
          <a className="hero-player-external" href="https://www.youtube.com/watch?v=SksZPgsQUmA" target="_blank" rel="noopener noreferrer">
            ABRIR NO YOUTUBE <ArrowUpRight size={14} />
          </a>
        </section>
        <section className="hero-shows-card" aria-labelledby="hero-shows-title">
          <div className="hero-card-heading"><h2 id="hero-shows-title">PRÓXIMOS SHOWS</h2><a href="#agenda">VER AGENDA <ArrowUpRight size={14} /></a></div>
          {displayShows.length ? (
            <div className="hero-show-list">{displayShows.map((event) => {
              const date = new Date(`${event.date}T12:00:00`);
              return <article key={event.id}><time dateTime={event.date!}><strong>{date.getDate().toString().padStart(2, '0')}</strong><span>{date.toLocaleDateString('pt-BR', { month: 'short' })}</span></time><div><small>{event.city} / {event.state}</small><h3>{event.venue}</h3>{event.ticketUrl && <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">Ingressos ↗</a>}</div></article>;
            })}</div>
          ) : <div className="hero-shows-empty"><CalendarDays size={28} aria-hidden="true" /><div><strong>Novos encontros vêm aí.</strong><p>As próximas datas serão divulgadas aqui.</p></div></div>}
        </section>
      </div>
    </div>
  );
}
