import { navigation } from '@/data/site';
import { PlatformLink } from '@/components/editorial';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <a href="#inicio" className="wordmark">
            WALDONYS<span>✦</span>
          </a>
          <p>Música, tradição e liberdade.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          {navigation.slice(1).map(([name, id]) => (
            <a href={`#${id}`} key={id}>
              {name}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          <PlatformLink platform="instagram">INSTAGRAM</PlatformLink>
          <PlatformLink platform="youtube">YOUTUBE</PlatformLink>
          <PlatformLink platform="spotify">SPOTIFY</PlatformLink>
        </div>
      </div>
      <div className="footer-bottom">
        <span>WALDONYS · CONCEITO PARA O SITE OFICIAL</span>
        <span>Informações legais e privacidade em preparação.</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>
  );
}
