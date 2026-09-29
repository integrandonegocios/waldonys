'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
export function Contact() {
  const [feedback, setFeedback] = useState(false);
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
          Conte um pouco sobre o seu evento.
        </p>
        <div className="contact-note">
          <span>CONTATO PROFISSIONAL</span>
          <p>
            Os canais oficiais de contratação
            <br />
            serão disponibilizados aqui.
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFeedback(true);
        }}
        onChange={() => setFeedback(false)}
      >
        <h3>
          Contrate Waldonys <ArrowUpRight size={21} />
        </h3>
        <p className="form-note" id="form-note">
          Formulário de demonstração. Nenhum dado será enviado ou armazenado.
        </p>
        <div className="form-grid">
          <label htmlFor="booking-name">
            Nome *
            <Input
              id="booking-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Seu nome"
              maxLength={120}
            />
          </label>
          <label htmlFor="booking-organization">
            Empresa / Evento *
            <Input
              id="booking-organization"
              name="organization"
              autoComplete="organization"
              required
              placeholder="Nome da empresa ou evento"
              maxLength={160}
            />
          </label>
          <label htmlFor="booking-email">
            E-mail *
            <Input
              id="booking-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="voce@empresa.com"
              maxLength={254}
            />
          </label>
          <label htmlFor="booking-phone">
            Telefone *
            <Input
              id="booking-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="(00) 00000-0000"
              maxLength={30}
            />
          </label>
          <label htmlFor="booking-city">
            Cidade *
            <Input
              id="booking-city"
              name="city"
              autoComplete="address-level2"
              required
              placeholder="Cidade / UF"
              maxLength={120}
            />
          </label>
          <label htmlFor="booking-date">
            Data do evento *
            <Input id="booking-date" name="date" type="date" required />
          </label>
          <label className="full" htmlFor="booking-eventType">
            Tipo de evento *
            <select
              id="booking-eventType"
              name="eventType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione o tipo de evento
              </option>
              <option>Festival</option>
              <option>Evento corporativo</option>
              <option>Evento particular</option>
              <option>Evento público</option>
              <option>Outro</option>
            </select>
          </label>
          <label className="full" htmlFor="booking-message">
            Mensagem *
            <Textarea
              id="booking-message"
              name="message"
              required
              placeholder="Conte sobre o evento, local e formato desejado…"
              rows={4}
              maxLength={4000}
            />
          </label>
        </div>
        <Button
          type="submit"
          className="action primary submit"
          aria-describedby="form-note"
        >
          TESTAR FORMULÁRIO <ArrowUpRight size={17} />
        </Button>
        {feedback && (
          <output className="form-feedback" aria-live="polite">
            Demonstração concluída. Seus dados foram validados no navegador, mas
            não foram enviados nem armazenados. O canal de contratação ainda não
            está ativo.
          </output>
        )}
      </form>
    </section>
  );
}
