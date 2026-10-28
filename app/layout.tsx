import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { getSiteOrigin } from '@/lib/site-origin';
import { isUnderConstruction } from '@/lib/maintenance';
import { MaintenancePage } from '@/components/maintenance-page';

export const metadata: Metadata = {
  metadataBase: getSiteOrigin(),
  icons: { icon: { url: '/favicon-sanfona.png', type: 'image/png' }, apple: '/favicon-sanfona.png' },
  title: 'Waldonys | Música, tradição e liberdade',
  description: site.description,
  robots: isUnderConstruction()
    ? { index: false, follow: false }
    : { index: true, follow: true },
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
        {isUnderConstruction() ? (
          <MaintenancePage />
        ) : (
          <>
            <a className="skip-link" href="#conteudo">
              Pular para o conteúdo
            </a>
            {children}
          </>
        )}
      </body>
    </html>
  );
}
