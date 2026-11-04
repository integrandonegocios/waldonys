import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Schedule } from '@/sections/schedule';
import { contentRepository } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Agenda de shows | Waldonys',
  description: 'Confira as próximas datas confirmadas dos shows de Waldonys.',
};

export default async function AgendaPage() {
  const events = await contentRepository.getShows();
  return (
    <>
      <Header />
      <main id="conteudo" className="videos-page">
        <section className="section videos-page-intro">
          <Link className="text-link" href="/#agenda"><ArrowLeft size={16} /> VOLTAR AO SITE</Link>
          <h1>Agenda de shows</h1>
          <p className="body-copy">Datas confirmadas para encontrar Waldonys pelo Brasil.</p>
        </section>
        <Schedule events={events} />
      </main>
      <Footer />
    </>
  );
}
