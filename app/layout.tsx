import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { site } from '@/data/site';
import { getSiteOrigin } from '@/lib/site-origin';
import { isUnderConstruction } from '@/lib/maintenance';
import { MaintenancePage } from '@/components/maintenance-page';

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get('host');
  const underConstruction = isUnderConstruction(host);
  return {
    metadataBase: getSiteOrigin(host),
    icons: { icon: { url: '/favicon-sanfona.png', type: 'image/png' }, apple: '/favicon-sanfona.png' },
    title: 'Waldonys | Música, tradição e liberdade',
    description: site.description,
    robots: underConstruction
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = (await headers()).get('host');
  return (
    <html lang="pt-BR" className="dark">
      <body>
        {isUnderConstruction(host) ? (
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
