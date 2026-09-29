import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/sections/hero';
import { History, Legacy } from '@/sections/history';
import { Universes } from '@/sections/universes';
import { Music, Videos, InstagramSection } from '@/sections/media';
import { Schedule } from '@/sections/schedule';
import { Presskit } from '@/sections/presskit';
import { Contact } from '@/sections/contact';
import { contentRepository } from '@/lib/content';

export default async function Home() {
  const [artist, releases, videos, shows] = await Promise.all([
    contentRepository.getArtist(),
    contentRepository.getMusic(),
    contentRepository.getVideos(),
    contentRepository.getShows(),
  ]);

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero events={shows} />
        <section className="section artist-intro" aria-labelledby="intro-title">
          <p className="eyebrow">MÚSICA, TRADIÇÃO E LIBERDADE</p>
          <h2 id="intro-title">Waldonys. <em>O forró nunca para.</em></h2>
          <p className="body-copy">O som do Nordeste e a energia dos encontros. Este é o espaço para
            se aproximar do universo de Waldonys, dar o play e acompanhar os momentos
            que conectam o palco à vida.</p>
        </section>
        <History artist={artist} />
        <Legacy artist={artist} />
        <Universes />
        <Music releases={releases} />
        <Videos videos={videos} />
        <InstagramSection />
        <Schedule events={shows} />
        <Presskit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
