# Site de Waldonys

Site institucional em português, desenvolvido com React 19, TypeScript, Tailwind CSS 4, Vinext e Nitro. A publicação é feita pela Vercel, ligada ao repositório GitHub.

## Páginas e recursos

- Página inicial com carrossel de banners, apresentação, história, legado, música, vídeos, Instagram, agenda, presskit e contratação.
- Página `/videos` com seleção de vídeos do canal oficial; pode atualizar via YouTube Data API quando `YOUTUBE_API_KEY` estiver configurada e usa uma seleção local como alternativa.
- Navegação responsiva, suporte a teclado, foco visível e respeito à preferência por movimento reduzido.
- Agenda de shows em `/#agenda` e `/agenda`, exibindo apenas eventos futuros e confirmados.
- O contato profissional permanece desativado até que a equipe confirme o canal oficial de contratação. O site não coleta nem envia dados de visitantes.

## Conteúdo e integrações

- `data/site.ts`: título, descrição, perfis oficiais e mídia em destaque. Confirme URLs e direitos de uso antes do lançamento.
- `data/demo.ts` e `lib/content.ts`: conteúdo provisório e adaptador atual. Substitua por conteúdo editorial aprovado e uma fonte de dados mantida pela equipe.
- `data/youtube-videos.json`: seleção local de vídeos, registrada como verificada em 29/09/2026.
- `public/images/`: banners, fotos, logotipo, favicon, cartão social e arquivo do presskit.
- Spotify e YouTube usam embeds quando recebem URLs e IDs válidos. O feed do Instagram ainda não está conectado.

### Atualizar a agenda de shows

Crie um calendário Google separado para shows que já podem ser divulgados, configure o fuso horário como Fortaleza e marque-o como público. Depois, configure `SHOWS_ICAL_URL` com o endereço público em formato iCal na Vercel. A agenda busca os eventos no servidor e atualiza o cache a cada cinco minutos. Use o título do evento para o nome do show, o campo de local para cidade/local e a descrição para detalhes. Para ingressos, adicione na descrição uma linha `Ingressos:` seguida da URL ou de um link clicável; a agenda transforma esse endereço no botão **INGRESSOS**. Crie um evento individual para cada show; eventos cancelados e datas passadas não aparecem no site. Nunca use o endereço iCal secreto de um calendário pessoal.

## Antes do lançamento público

1. Revisar e aprovar biografia, marcos da carreira, fotos, legendas, presskit, música e vídeos.
2. Inserir datas reais na agenda e confirmar os perfis e links oficiais.
3. Configurar o canal de contratação, o tratamento seguro dos dados e o aviso de privacidade.
4. Definir o domínio oficial e `NEXT_PUBLIC_SITE_URL`.
5. Se houver domínio próprio, defini-lo em `NEXT_PUBLIC_SITE_URL`; sem ele, a URL de produção da Vercel é usada para metadados.
6. Fazer uma revisão visual em celular e desktop.

## Página temporária de manutenção

Em deploys de **Production** na Vercel, a página “Estamos preparando novidades”
é exibida por padrão. Os deploys de Preview continuam mostrando o site completo
para revisão. A página marca o conteúdo como `noindex` e o sitemap fica vazio
enquanto a manutenção estiver ativa.

Quando o site estiver pronto, defina `SITE_EM_CONSTRUCAO=false` no escopo
Production da Vercel e faça outro deploy. Se o domínio passar pelo proxy da
Cloudflare, limpe o cache do domínio após cada troca para a página aparecer
imediatamente.

## Desenvolvimento e validação

```sh
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

O projeto usa `vite build` e Nitro para gerar a saída no formato Build Output API da Vercel. `vercel.json` configura o comando de build e a pasta de saída. Defina `NEXT_PUBLIC_SITE_URL` na Vercel quando usar um domínio próprio; sem ele, metadados e sitemap usam o domínio de produção atribuído pela Vercel.
