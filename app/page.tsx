import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/sections/hero';
import { History, Legacy } from '@/sections/history';
import { Universes } from '@/sections/universes';
import { Music, Videos, InstagramSection } from '@/sections/media';
import { Schedule } from '@/sections/schedule';
import { Gallery } from '@/sections/gallery';
import { Contact } from '@/sections/contact';
import { contentRepository } from '@/lib/content';
export default async function Home() {
  const [artist, releases, videos, shows, gallery] = await Promise.all([
    contentRepository.getArtist(),
    contentRepository.getMusic(),
    contentRepository.getVideos(),
    contentRepository.getShows(),
    contentRepository.getGallery(),
  ]);
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <div className="brand-strip">
          <span>O SOM DA NOSSA TERRA.</span>
          <span aria-hidden="true">✦</span>
          <span>A LIBERDADE DE IR ALÉM.</span>
          <span aria-hidden="true">✦</span>
          <span>WALDONYS.</span>
        </div>
        <History artist={artist} />
        <Universes />
        <Music releases={releases} />
        <Videos videos={videos} />
        <Schedule events={shows} />
        <Legacy artist={artist} />
        <Gallery images={gallery} />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
