import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Headphones } from 'lucide-react';
import { PlatformLink } from '@/components/editorial';
import { site } from '@/data/site';
export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Image
        unoptimized
        className="hero-image"
        width={2000}
        height={1300}
        src={site.heroImage}
        alt="Paisagem natural ilustrativa; fotografia oficial do artista a inserir"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">
          <span /> MÚSICA COM RAÍZES. ALMA COM ASAS.
        </p>
        <h1>
          {site.headlineLead}
          <br />
          {site.headlineMiddle} <em>{site.headlineAccent}</em>
        </h1>
        <p className="hero-description">
          {site.tagline}
          <br />
          Descubra os universos de Waldonys.
        </p>
        <div className="actions">
          <a href="#musica" className="action primary">
            <Headphones size={17} /> OUVIR AGORA <ArrowUpRight size={17} />
          </a>
          <a href="#agenda" className="action outline">
            VER AGENDA <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="hero-socials">
          <PlatformLink platform="spotify">SPOTIFY</PlatformLink>
          <PlatformLink platform="youtube">YOUTUBE</PlatformLink>
          <PlatformLink platform="instagram">INSTAGRAM</PlatformLink>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#historia">
          <ArrowDown size={17} /> EXPLORE ESSA HISTÓRIA
        </a>
        <span>ESTUDO VISUAL · IMAGEM ILUSTRATIVA</span>
        <span className="hero-coordinate">
          NORDESTE NA ESSÊNCIA. LIBERDADE NO HORIZONTE.
        </span>
      </div>
    </section>
  );
}
