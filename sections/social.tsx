import { Headphones, Camera, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { spotifyEmbedUrl, youtubeEmbedUrl } from '@/lib/integrations/platforms';

export function CompactMusic() {
  const spotify = spotifyEmbedUrl(site.media.spotifyUrl);
  const youtube = youtubeEmbedUrl(site.media.youtubeId);
  return (
    <section id="musica" className="section compact-music">
      <div>
        <p className="eyebrow">APERTE O PLAY</p>
        <h2>O forró <em>nunca para.</em></h2>
        <p className="body-copy">O som de Waldonys, onde você estiver.</p>
      </div>
      <div className="compact-player">
        {spotify ? (
          <iframe src={spotify} title="Waldonys no Spotify" height={352} width="100%" loading="lazy" allow="encrypted-media; fullscreen; picture-in-picture" />
        ) : youtube ? (
          <iframe className="video-frame" src={youtube} title="Waldonys no YouTube" loading="lazy" allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
        ) : (
          <div className="social-empty">
            <Headphones size={30} strokeWidth={1.4} aria-hidden="true" />
            <h3>Seu próximo play é aqui.</h3>
            <p>Em breve, uma seleção de Waldonys no Spotify ou YouTube.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function InstagramPosts() {
  return (
    <section id="instagram" className="section compact-instagram">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><Camera size={17} aria-hidden="true" /> INSTAGRAM</p>
          <h2>Mais perto de <em>Waldonys.</em></h2>
        </div>
        {site.socials.instagram && (
          <a className="text-link" href={site.socials.instagram} target="_blank" rel="noopener noreferrer">VER PERFIL <ArrowUpRight size={17} /></a>
        )}
      </div>
      <div className="instagram-post-space">
        <Camera size={32} strokeWidth={1.3} aria-hidden="true" />
        <div>
          <h3>Do palco para o seu feed.</h3>
          <p>Em breve, posts e momentos do Instagram por aqui.</p>
        </div>
      </div>
    </section>
  );
}
