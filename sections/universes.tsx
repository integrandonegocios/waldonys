import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
const universes = [
  {
    id: 'musica',
    title: 'Música',
    line: 'A essência.',
    text: 'A força da música nordestina. A conexão que acontece no palco.',
    image: '/images/showwaldonys.jpg',
    href: '#musica',
  },
  {
    id: 'aviacao',
    title: 'Aviação',
    line: 'O horizonte.',
    text: 'A paixão por voar também faz parte dessa história.',
    image: '/images/wadlonysaviao.jpg',
    href: 'https://www.instagram.com/waldonys_/',
  },
  {
    id: 'paraquedismo',
    title: 'Paraquedismo',
    line: 'A liberdade.',
    text: 'O céu como parte de uma identidade que vai além da música.',
    image: '/images/wadlonysparaquedas.jpg',
    href: 'https://www.instagram.com/waldonys_/',
  },
];
export function Universes() {
  return (
    <section className="universes">
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
              alt={`Waldonys e seu universo de ${item.title.toLowerCase()}`}
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="universe-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a
                href={item.href}
                aria-label={`Saiba mais sobre ${item.title}`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                SAIBA MAIS <ArrowUpRight size={20} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
