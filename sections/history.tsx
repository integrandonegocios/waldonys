import {
  SectionHeading,
  DemoNote,
  EditorialImage,
} from '@/components/editorial';
import type { ArtistContent } from '@/types/content';
export function History({ artist }: { artist: ArtistContent }) {
  return (
    <section id="historia" className="section history">
      <div className="history-photo">
        <EditorialImage
          src="/images/stage.jpg"
          alt="Microfone de palco; imagem ilustrativa para futura fotografia de Waldonys"
          caption="O som é o ponto de partida."
        />
        <span className="photo-index">01 / ESSÊNCIA</span>
      </div>
      <div>
        <SectionHeading
          number="01"
          label="A HISTÓRIA"
          title={
            <>
              Raízes no Nordeste.
              <br />
              <em>Olhos no horizonte.</em>
            </>
          }
        />
        <p className="body-copy">
          A música nordestina, o forró e a liberdade de voar fazem parte dos
          universos de Waldonys. Uma identidade que encontra expressão no palco
          e no céu.
        </p>
        {artist.biography ? (
          <p className="body-copy">{artist.biography}</p>
        ) : (
          <div className="editorial-pending">
            <p>A história merece ser contada em cada detalhe.</p>
            <DemoNote>
              Biografia completa em preparação, a partir de material oficial.
            </DemoNote>
          </div>
        )}
        <a className="text-link" href="#legado">
          CONHEÇA AS RAÍZES DESSA HISTÓRIA <span>↗</span>
        </a>
        <div
          className="timeline"
          aria-label="Estrutura provisória da linha do tempo"
        >
          {artist.timeline.map((event) => (
            <div key={event.id}>
              <span>{event.year ?? 'ANO A CONFIRMAR'}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Legacy({ artist }: { artist: ArtistContent }) {
  return (
    <section id="legado" className="legacy section">
      <div className="legacy-symbol" aria-hidden="true">
        LG<span>RAÍZES & LEGADO</span>
      </div>
      <div>
        <p className="eyebrow">
          <span /> UM ENCONTRO COM A TRADIÇÃO
        </p>
        <h2>
          Waldonys &<br />
          <em>Luiz Gonzaga.</em>
        </h2>
        <p className="body-copy">
          Um espaço dedicado à relação histórica entre Waldonys e Luiz Gonzaga,
          com o respeito que essa memória merece.
        </p>
        {artist.legacy ? (
          <p className="body-copy">{artist.legacy}</p>
        ) : (
          <DemoNote>
            O acervo, os relatos e os marcos desta história serão publicados
            após verificação das fontes.
          </DemoNote>
        )}
      </div>
    </section>
  );
}
