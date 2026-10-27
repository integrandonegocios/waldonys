import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <div>
        <h2>
          O seu evento.
          <br />
          Uma experiência
          <br />
          <em>com Waldonys.</em>
        </h2>
        <p className="body-copy">
          Contratação de shows e propostas profissionais.
          <br />
          Em breve, os canais oficiais estarão disponíveis.
        </p>
        <div className="contact-note">
          <span>CONTATO PROFISSIONAL</span>
          <p>As informações de contratação serão divulgadas por aqui.</p>
        </div>
      </div>
      <div className="contact-status" aria-labelledby="contact-status-title">
        <h3 id="contact-status-title">
          Canal de contratação em preparação <ArrowUpRight size={21} aria-hidden="true" />
        </h3>
        <p>
          O atendimento ainda não está ativo. Assim que o contato oficial for
          confirmado, você poderá enviar sua proposta por este espaço.
        </p>
      </div>
    </section>
  );
}
