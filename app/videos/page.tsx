import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionHeading } from '@/components/editorial';
import { getChannelVideos, youtubeThumbnail } from '@/lib/youtube';

export const metadata: Metadata = {
  title: 'Vídeos | Waldonys',
  description: 'Vídeos, músicas e apresentações de Waldonys.',
};

export default async function VideosPage() {
  const videos = await getChannelVideos();
  return (
    <>
      <Header />
      <main id="conteudo" className="videos-page">
        <section className="section videos-page-intro">
          <SectionHeading
            number=""
            label=""
            title={<>Vídeos que <em>contam.</em></>}
          />
          <p className="body-copy">
            Acompanhe os lançamentos, shows e histórias no canal oficial de Waldonys.
          </p>
          <a className="text-link" href="https://www.youtube.com/@waldonysoficial" target="_blank" rel="noopener noreferrer">
            VER CANAL NO YOUTUBE <ArrowUpRight size={16} />
          </a>
        </section>
        <section className="section channel-videos" aria-labelledby="channel-videos-title">
          <h1 id="channel-videos-title">Canal oficial</h1>
          <div className="channel-video-grid">
            {videos.map((video) => {
              const videoId = video.youtubeId;
              if (!videoId) return null;
              return (
                <a
                  className="channel-video-card"
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={video.id}
                >
                  <div className="channel-video-thumb">
                    <Image
                      unoptimized
                      src={video.thumbnail ?? youtubeThumbnail(videoId)}
                      alt={`Thumbnail do vídeo: ${video.title}`}
                      fill
                      sizes="(max-width: 800px) 86vw, 28vw"
                    />
                    <span><Play size={17} fill="currentColor" /></span>
                  </div>
                  <div className="channel-video-caption">
                    <h2>{video.title}</h2>
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
