import type {
  ShowEvent,
  MusicRelease,
  Video,
  GalleryImage,
  ArtistContent,
} from '@/types/content';
// Fixtures explícitas. Nunca retornar como dados publicados por uma integração.
export const demoShows: ShowEvent[] = [
  {
    id: 'demo-1',
    date: null,
    city: 'Cidade a confirmar',
    state: '—',
    venue: 'Local do evento a definir',
    time: null,
    details: 'Linha ilustrativa. Não representa um show anunciado.',
    ticketUrl: null,
    demonstration: true,
  },
];
export const demoMusic: MusicRelease[] = [
  {
    id: 'demo-album',
    title: 'Seu próximo encontro com a música',
    kind: 'album',
    cover: null,
    spotifyUrl: null,
    demonstration: true,
  },
];
export const demoVideos: Video[] = [
  {
    id: 'novo-album-trabalho',
    title: 'Novo álbum de trabalho',
    youtubeId: 'asElMsgdpns',
    thumbnail: null,
    demonstration: false,
  },
  {
    id: 'video-oficial-2',
    title: 'Waldonys no YouTube',
    youtubeId: 'G06ZqY6cIs4',
    thumbnail: null,
    demonstration: false,
  },
];
export const demoGallery: GalleryImage[] = [
  {
    id: 'stage',
    category: 'Shows',
    src: '/images/b4.png',
    alt: 'Waldonys tocando acordeão em um grande palco iluminado',
    caption: 'A energia do palco',
    illustrative: false,
  },
  {
    id: 'aviation',
    category: 'Aviação',
    src: '/images/b2.png',
    alt: 'Avião azul de Waldonys em voo',
    caption: 'Novos horizontes',
    illustrative: false,
  },
  {
    id: 'banner',
    category: 'Bastidores',
    src: '/images/b1.png',
    alt: 'Waldonys tocando acordeão em um ambiente iluminado',
    caption: 'Antes das luzes',
    illustrative: false,
  },
  {
    id: 'skydiving',
    category: 'Momentos',
    src: '/images/b5.png',
    alt: 'Waldonys tocando acordeão ao lado de outros músicos',
    caption: 'A sensação de liberdade',
    illustrative: false,
  },
  {
    id: 'moments',
    category: 'Momentos',
    src: '/images/b3.png',
    alt: 'Waldonys criança ao lado de Luiz Gonzaga e outro músico',
    caption: 'Pelo caminho',
    illustrative: false,
  },
];
export const demoArtist: ArtistContent = {
  biography: null,
  legacy: null,
  timeline: [
    {
      id: 'origins',
      year: null,
      title: 'As raízes',
      description: 'Espaço reservado para um marco verificado da trajetória.',
      sourceUrl: null,
    },
    {
      id: 'music',
      year: null,
      title: 'Os encontros',
      description: 'Espaço reservado para um marco verificado da trajetória.',
      sourceUrl: null,
    },
    {
      id: 'horizons',
      year: null,
      title: 'Os horizontes',
      description: 'Espaço reservado para um marco verificado da trajetória.',
      sourceUrl: null,
    },
  ],
};
