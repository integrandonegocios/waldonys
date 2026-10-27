import Image from 'next/image';
import Link from 'next/link';
import { Music2, Film, ArrowUpRight, Camera } from 'lucide-react';
import { SectionHeading, DemoNote, PlatformLink } from '@/components/editorial';
import { spotifyEmbedUrl, youtubeEmbedUrl } from '@/lib/integrations/platforms';
import type { MusicRelease, Video } from '@/types/content';
export function Music({ releases }: { releases: MusicRelease[] }) {
  return (
    <section id="musica" className="section music">
      <SectionHeading
        number="03"
        label="APERTE O PLAY"
        title={
          <>
            O Nordeste pulsa.
            <br />
            <em>A música fica.</em>
          </>
        }
      >
        <PlatformLink platform="spotify">OUÇA NO SPOTIFY</PlatformLink>
      </SectionHeading>
      <div className="music-feature">
        <div className="album-placeholder">
          <Image
            unoptimized
            src="/images/showwaldonys.jpg"
            alt="Waldonys tocando acordeão"
            fill
            sizes="(max-width: 800px) 100vw, 40vw"
            className="album-art"
          />
          <span className="image-label">WALDONYS · MÚSICA</span>
        </div>
        <div className="music-copy">
          <p className="eyebrow">UM ESPAÇO PARA O SOM</p>
          <h3>{releases[0]?.title ?? 'A discografia, em um só lugar.'}</h3>
          <p className="body-copy">
            Canções, álbuns e encontros musicais.
            <br />
            Uma seleção para ouvir e se deixar levar.
          </p>
          <div className="music-categories">
            <span>LANÇAMENTOS</span>
            <span>ÁLBUNS</span>
            <span>PLAYLISTS</span>
          </div>
          {releases.map((release) => {
            const embed = release.spotifyUrl
              ? spotifyEmbedUrl(release.spotifyUrl)
              : null;
            return embed ? (
              <iframe
                key={release.id}
                src={embed}
                title={`Spotify — ${release.title}`}
                height={152}
                width="100%"
                loading="lazy"
                allow="encrypted-media; fullscreen; picture-in-picture"
              />
            ) : null;
          })}
          <div className="media-pending">
            <Music2 size={20} />
            <div>
              <p>A seleção musical está sendo preparada.</p>
              <DemoNote>
                O player aparecerá quando o conteúdo oficial for configurado.
              </DemoNote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Videos({ videos }: { videos: Video[] }) {
  return (
    <section id="videos" className="section videos">
      <SectionHeading
        number="04"
        label="SOM, IMAGEM E EMOÇÃO"
        title={
          <>
            Histórias para <em>assistir.</em>
          </>
        }
      >
        <PlatformLink platform="youtube">CANAL NO YOUTUBE</PlatformLink>
      </SectionHeading>
      <div className="video-grid">
        {videos.slice(0, 2).map((video, i) => {
          const embed = video.youtubeId
            ? youtubeEmbedUrl(video.youtubeId)
            : null;
          return (
            <article key={video.id}>
              {embed ? (
                <iframe
                  className="video-frame"
                  src={embed}
                  title={video.title}
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="video-placeholder">
                  <Image
                    unoptimized
                    src={i ? '/images/sky.jpg' : '/images/stage.jpg'}
                    alt="Imagem ilustrativa; vídeo oficial a selecionar"
                    loading="lazy"
                    width={900}
                    height={550}
                  />
                  <span className="video-status">
                    <Film size={25} />
                    <span>VÍDEO EM BREVE</span>
                  </span>
                </div>
              )}
              <div className="video-caption">
                <div>
                  <p className="eyebrow">
                    VÍDEO DO CANAL OFICIAL
                  </p>
                  <h3>{video.title}</h3>
                </div>
                <ArrowUpRight size={23} />
              </div>
              {video.demonstration && (
                <DemoNote>
                  Título conceitual · vídeo oficial a selecionar
                </DemoNote>
              )}
            </article>
          );
        })}
      </div>
      <Link className="text-link" href="/videos">VER OS 20 VÍDEOS MAIS RECENTES <ArrowUpRight size={16} /></Link>
    </section>
  );
}
export function InstagramSection() {
  return (
    <section id="instagram" className="section instagram">
      <div>
        <p className="eyebrow">
          <Camera size={17} /> MAIS PERTO
        </p>
        <h2>
          Além do palco.
          <br />
          <em>No dia a dia.</em>
        </h2>
        <p className="body-copy">
          Um espaço para os bastidores, os encontros
          <br />e os momentos entre um horizonte e outro.
        </p>
        <PlatformLink platform="instagram">VER NO INSTAGRAM</PlatformLink>
      </div>
      <div className="instagram-preview">
        <div>
          <Image
            unoptimized
            src="/images/landscape.jpg"
            alt="Natureza; composição ilustrativa, não é uma publicação do artista"
            width={600}
            height={600}
            loading="lazy"
          />
          <span>PELO CAMINHO</span>
        </div>
        <div>
          <Image
            unoptimized
            src="/images/sky.jpg"
            alt="Céu; composição ilustrativa, não é uma publicação do artista"
            width={600}
            height={600}
            loading="lazy"
          />
          <span>ENTRE HORIZONTES</span>
        </div>
        <DemoNote>
          Composição ilustrativa. Publicações serão exibidas após conectar o
          perfil oficial.
        </DemoNote>
      </div>
    </section>
  );
}
