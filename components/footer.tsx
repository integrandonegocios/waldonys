import Image from 'next/image';
export function Footer() {
  return (
    <footer className="compact-footer">
      <a className="site-logo" href="#inicio" aria-label="Waldonys — início"><Image unoptimized src="/images/logowaldonys.png" alt="Waldonys" width={1536} height={1024} /></a>
      <p>Música, tradição e liberdade.</p>
      <a className="text-link" href="#inicio">VOLTAR AO TOPO ↑</a>
    </footer>
  );
}
