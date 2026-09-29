import {
  SectionHeading,
  DemoNote,
  EditorialImage,
} from '@/components/editorial';
import Image from 'next/image';
import type { ArtistContent } from '@/types/content';
export function History({ artist }: { artist: ArtistContent }) {
  return (
    <section id="historia" className="section history">
      <div className="history-photo">
        <EditorialImage
          src="/images/perfil.jpg"
          alt="Waldonys tocando acordeão durante uma apresentação"
          caption="Uma vida dedicada à música."
          className="history-portrait"
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
      <div className="legacy-photo">
        <Image
          src="/images/luis.jpg"
          alt="Luiz Gonzaga ao lado de Waldonys ainda criança"
          width={900}
          height={900}
          loading="lazy"
        />
        <span>RAÍZES & LEGADO</span>
      </div>
      <div>
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
          <div className="legacy-copy">
            <p className="body-copy">
              Luiz Gonzaga e Waldonys representam duas gerações unidas pela
              força da música nordestina.
            </p>
            <p className="body-copy">
              Conhecido como o Rei do Baião, Luiz Gonzaga levou para todo o
              Brasil os sons, as histórias e os sentimentos do sertão. Com sua
              sanfona, sua voz e sua identidade marcante, transformou o baião,
              o xote e o xaxado em símbolos da cultura nordestina.
            </p>
            <p className="body-copy">
              Waldonys segue essa tradição com personalidade própria.
              Sanfoneiro, cantor e compositor cearense, cresceu influenciado
              pela obra de Gonzaga e tornou-se um dos grandes representantes da
              música regional brasileira, mantendo viva a essência do forró e
              levando a sanfona para novas gerações.
            </p>
            <p className="body-copy">
              Juntos, simbolizam a continuidade de uma história feita de
              música, raízes, memória e amor pelo Nordeste.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
