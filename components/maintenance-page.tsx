import { site } from '@/data/site';
import Image from 'next/image';

export function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-card">
        <Image
          src="/images/logowaldonys.png"
          alt="Waldonys"
          width={1536}
          height={1024}
          preload
          unoptimized
        />
        <p className="maintenance-eyebrow">SITE EM ATUALIZAÇÃO</p>
        <h1>Estamos preparando novidades.</h1>
        <p className="maintenance-copy">
          Em breve, este será o novo espaço para acompanhar a música, a história
          e a agenda de Waldonys.
        </p>
        <a href={site.socials.instagram} target="_blank" rel="noreferrer">
          Acompanhe pelas redes sociais <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}
