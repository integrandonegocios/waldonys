# Site de Waldonys

Site institucional em português, desenvolvido com React 19, TypeScript, Tailwind CSS 4, Vinext e Nitro. A publicação é feita pela Vercel, ligada ao repositório GitHub.

## Páginas e recursos

- Página inicial com carrossel de banners, apresentação, história, legado, música, vídeos, Instagram, agenda, presskit e contratação.
- Página `/videos` com seleção de vídeos do canal oficial; pode atualizar via YouTube Data API quando `YOUTUBE_API_KEY` estiver configurada e usa uma seleção local como alternativa.
- Navegação responsiva, suporte a teclado, foco visível e respeito à preferência por movimento reduzido.
- Agenda exibe somente datas confirmadas. Enquanto não houver eventos cadastrados, apresenta um estado vazio.
- O contato profissional permanece desativado até que a equipe confirme o canal oficial de contratação. O site não coleta nem envia dados de visitantes.

## Conteúdo e integrações

- `data/site.ts`: título, descrição, perfis oficiais e mídia em destaque. Confirme URLs e direitos de uso antes do lançamento.
- `data/demo.ts` e `lib/content.ts`: conteúdo provisório e adaptador atual. Substitua por conteúdo editorial aprovado e uma fonte de dados mantida pela equipe.
- `data/youtube-videos.json`: seleção local de vídeos, registrada como verificada em 29/09/2026.
- `public/images/`: banners, fotos, logotipo, favicon, cartão social e arquivo do presskit.
- Spotify e YouTube usam embeds quando recebem URLs e IDs válidos. O feed do Instagram ainda não está conectado.

## Antes do lançamento público

1. Revisar e aprovar biografia, marcos da carreira, fotos, legendas, presskit, música e vídeos.
2. Inserir datas reais na agenda e confirmar os perfis e links oficiais.
3. Configurar o canal de contratação, o tratamento seguro dos dados e o aviso de privacidade.
4. Definir o domínio oficial e `NEXT_PUBLIC_SITE_URL`.
5. Se houver domínio próprio, defini-lo em `NEXT_PUBLIC_SITE_URL`; sem ele, a URL de produção da Vercel é usada para metadados.
6. Fazer uma revisão visual em celular e desktop.

## Desenvolvimento e validação

```sh
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

O projeto usa `vite build` para gerar a saída Nitro compatível com Vercel. Na Vercel, configure o comando `npm run build`; o adaptador Nitro detecta a plataforma durante o build. Defina `NEXT_PUBLIC_SITE_URL` na Vercel com o domínio de produção para metadados e sitemap.
