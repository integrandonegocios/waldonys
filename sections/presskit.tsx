import { Download } from 'lucide-react';

export function Presskit() {
  return (
    <section id="presskit" className="section presskit">
      <div className="presskit-intro">
        <h2>Baixar <em>Presskit.</em></h2>
        <p className="body-copy">
          Acesse nosso kit exclusivo e baixe os arquivos necessários para criar
          seus próprios materiais de divulgação, seguindo a identidade visual
          da marca.
        </p>
      </div>
      <div className="presskit-action">
        <a className="presskit-download" href="/presskit/waldonys-presskit.zip" download>
          <Download size={18} /> BAIXAR PRESSKIT COMPLETO
        </a>
      </div>
    </section>
  );
}
