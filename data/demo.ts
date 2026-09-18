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
    id: 'demo-live',
    title: 'O palco, de perto',
    youtubeId: null,
    thumbnail: null,
    demonstration: true,
  },
  {
    id: 'demo-sky',
    title: 'Um olhar para o céu',
    youtubeId: null,
    thumbnail: null,
    demonstration: true,
  },
];
export const demoGallery: GalleryImage[] = [
  {
    id: 'shows',
    category: 'Shows',
    src: '/images/stage.jpg',
    alt: 'Microfone em ambiente de palco; imagem ilustrativa',
    caption: 'A energia do palco',
    illustrative: true,
  },
  {
    id: 'aviation',
    category: 'Aviação',
    src: '/images/sky.jpg',
    alt: 'Nuvens no céu; imagem ilustrativa',
    caption: 'Novos horizontes',
    illustrative: true,
  },
  {
    id: 'backstage',
    category: 'Bastidores',
    src: '/images/stage.jpg',
    alt: 'Detalhe de microfone; imagem ilustrativa',
    caption: 'Antes das luzes',
    illustrative: true,
  },
  {
    id: 'skydiving',
    category: 'Paraquedismo',
    src: '/images/sky.jpg',
    alt: 'Céu aberto; imagem ilustrativa',
    caption: 'A sensação de liberdade',
    illustrative: true,
  },
  {
    id: 'moments',
    category: 'Momentos',
    src: '/images/landscape.jpg',
    alt: 'Paisagem natural; imagem ilustrativa',
    caption: 'Pelo caminho',
    illustrative: true,
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
