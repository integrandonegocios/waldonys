# Waldonys — conceito de site oficial

Home editorial em português, com estética grafite/âmbar e conteúdo provisório explícito. Nenhuma imagem representa uma fotografia oficial do artista. Não há shows, estatísticas ou fatos biográficos inventados.

## Tecnologia

React 19, TypeScript, Tailwind CSS 4, componentes shadcn/Base UI e Lucide. O scaffold Sites utiliza **Vinext**, compatível com a estrutura App Router e APIs do Next.js, sobre Vite/Cloudflare Workers; não é o runtime padrão do Next.js.

## Estrutura

- `app/`: Home, layout, tokens/CSS, metadados, robots e sitemap.
- `components/`: header, footer, componentes editoriais e primitivas de formulário/dialog.
- `sections/`: hero, história/legado, universos, música/vídeos/Instagram, agenda, galeria e contato.
- `data/site.ts`: nome, headline, descrição, imagem de abertura e URLs oficiais a confirmar.
- `data/demo.ts`: fixtures de demonstração isoladas.
- `types/content.ts`: contratos para artista, timeline, shows, lançamentos, vídeos, galeria, notícias e contratação.
- `lib/content.ts`: repositório de conteúdo substituível por backend.
- `lib/integrations/platforms.ts`: estado `not-configured` e validação de URLs de embed, sem chamadas fictícias.
- `assets/README.md`: procedência e orientações para substituir imagens.
- `public/`: imagens ilustrativas, favicon e cartão social.

## Recursos implementados

Navegação por âncoras, header com mudança ao rolar, menu mobile com Escape, galeria por categoria e lightbox acessível, formulário com validação nativa e feedback explícito de não envio. Responsividade CSS para desktop, notebook, tablet e celular, foco visível, skip link e respeito a movimento reduzido.

Música e vídeos só renderizam embeds quando recebem uma URL/ID válido. Links sociais não recebem URLs especulativas: preencha `site.socials` com perfis oficiais verificados. O formulário não persiste nem transmite dados.

## Integrações e administração futuras

Implementar `ContentRepository` com armazenamento real e substituir o adaptador demo. Spotify, YouTube e Meta devem ter adaptadores próprios; segredos somente no servidor. A API de Instagram depende de autorização Meta. A futura rota `/admin` deve ser criada junto com autenticação, autorização e backend: não foi criado um painel fictício ou desprotegido. O contrato já cobre agenda, música, vídeos, galeria, notícias e artista. Adicionar endpoint de contratação e aviso de privacidade antes de habilitar envio.

## SEO

Title, description, Open Graph, Twitter/X, favicon, robots e sitemap. `NEXT_PUBLIC_SITE_URL` deve ser a origem confiável de publicação. Este conceito usa **noindex** e bloqueio em robots para não indexar conteúdo de demonstração; remover após aprovação editorial e substituição dos placeholders. O sitemap utiliza a origem privada criada no Sites, substituível pelo domínio oficial na publicação pública.

## Desenvolvimento e validação

```sh
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

Servidor: URL informada por `npm run dev` (nesta sessão, http://localhost:3000).

A validação visual em desktop/notebook/tablet/celular depende de navegador conectado; não foi possível executá-la nesta sessão. Conferência recomendada em 1440, 1280, 768 e 390 px: menu, ausência de overflow, leitura, filtros, lightbox/Escape e formulário inválido/válido. Core Web Vitals não foram medidos.

## Conteúdo pendente

Fotografias autorizadas, biografia e marcos com fontes, acervo sobre Luiz Gonzaga, discografia, URLs oficiais, vídeos, agenda confirmada, contatos de contratação e textos legais. A imagem de referência mencionada no briefing não estava disponível nos anexos recebidos.

## Revisão de interface — 23/09/2026

Ampliada a tipografia auxiliar e dos formulários, ajustado o menu para telas intermediárias e corrigida a galeria com uma única imagem filtrada. No celular, as fotos usam uma coluna. Adicionados estado vazio da galeria e foco explícito nos campos. Ações demonstrativas receberam rótulos compatíveis com sua disponibilidade. Build, lint e TypeScript passaram; inspeção visual e testes interativos continuam pendentes porque nenhum navegador estava conectado.
