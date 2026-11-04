import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
export function Footer() {
  return (
    <footer className="compact-footer">
      <a className="site-logo" href="#inicio" aria-label="Waldonys — início"><Image unoptimized src="/images/logowaldonys.png" alt="Waldonys" width={1536} height={1024} /></a>
      <a className="footer-back-to-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp size={20} aria-hidden="true" /></a>
      <div className="footer-credit">
        <a href="https://www.integrandonegocios.com.br" target="_blank" rel="noopener noreferrer" aria-label="Desenvolvido por Integrando Negócios — abrir site em nova aba">
          <span>Desenvolvido por</span>
          <Image unoptimized src="/images/integrando-negocios.png" alt="Integrando Negócios" width={460} height={220} loading="lazy" />
        </a>
      </div>
    </footer>
  );
}
