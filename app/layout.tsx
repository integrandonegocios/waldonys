import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  icons: { icon: '/favicon.svg' },
  title: 'Waldonys | Música, tradição e liberdade',
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Waldonys | Música, tradição e liberdade',
    description: site.description,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 907,
        alt: 'Waldonys — Música, tradição e liberdade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waldonys | Música, tradição e liberdade',
    description: site.description,
    images: ['/og.png'],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
