export type Banner = {
  src: string;
  alt: string;
  position?: string;
};

// Banners oficiais recebidos para a página inicial.
export const bannerSlots: [Banner, Banner | null, Banner | null, Banner | null, Banner | null] = [
  {
    src: '/images/b1.png',
    alt: 'Waldonys tocando acordeão em um ambiente iluminado por lanternas.',
    position: 'center',
  },
  {
    src: '/images/b2.png',
    alt: 'Avião azul de Waldonys em voo sobre a paisagem brasileira.',
    position: 'center',
  },
  {
    src: '/images/b3.png',
    alt: 'Waldonys criança ao lado de Luiz Gonzaga e outro músico.',
    position: 'center',
  },
  {
    src: '/images/b4.png',
    alt: 'Waldonys tocando acordeão em um grande palco iluminado.',
    position: 'center',
  },
  {
    src: '/images/b5.png',
    alt: 'Waldonys tocando acordeão ao lado de outros músicos no palco.',
    position: 'center',
  },
];
