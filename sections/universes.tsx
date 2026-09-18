import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/editorial';
const universes = [
  {
    id: 'musica',
    title: 'Música',
    line: 'A essência.',
    text: 'A força da música nordestina. A conexão que acontece no palco.',
    image: '/images/stage.jpg',
    href: '#musica',
  },
  {
    id: 'aviacao',
    title: 'Aviação',
    line: 'O horizonte.',
    text: 'A paixão por voar também faz parte dessa história.',
    image: '/images/sky.jpg',
    href: '#galeria',
  },
  {
    id: 'paraquedismo',
    title: 'Paraquedismo',
    line: 'A liberdade.',
    text: 'O céu como parte de uma identidade que vai além da música.',
    image: '/images/sky.jpg',
    href: '#galeria',
  },
];
export function Universes() {
  return (
    <section className="universes">
      <div className="section-heading-wrap">
        <SectionHeading
          number="02"
          label="UM ARTISTA. DIFERENTES UNIVERSOS."
          title={
            <>
              A mesma alma.
              <br />
              <em>Sem fronteiras.</em>
            </>
          }
        />
      </div>
      <div className="universe-grid">
        {universes.map((item, i) => (
          <article
            className={`universe universe-${i}`}
            key={item.id}
            id={i ? item.id : undefined}
          >
            <Image
              unoptimized
              src={item.image}
              alt={`Imagem ilustrativa para o universo ${item.title}`}
              loading="lazy"
              width={800}
              height={1000}
            />
            <span className="universe-number">
              0{i + 1} / {item.line.toUpperCase()}
            </span>
            <div className="universe-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.href} aria-label={`Explorar ${item.title}`}>
                EXPLORAR <ArrowUpRight size={20} />
              </a>
            </div>
            <span className="image-label">IMAGEM ILUSTRATIVA</span>
          </article>
        ))}
      </div>
    </section>
  );
}
