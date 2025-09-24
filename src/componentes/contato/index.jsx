import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

export default function Contato({ linksURL }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aft4ltu", "template_6r0h3mc", form.current, {
        publicKey: "pDHHXOh5rVtcDeJ0M",
      })
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          console.log(result.text);
        },
        (error) => {
          alert("Erro ao enviar. Tente novamente.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contato">
      <div className="caixa_forms">
        <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="nome">Seu Nome</label>
              <input
                type="text"
                name="user_name"
                id="nome"
                placeholder="Seu nome..."
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Seuemail@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="assunto">Qual o assunto da mensagem</label>
              <input
                type="text"
                name="subject"
                id="assunto"
                placeholder="Assunto"
                list="assuntos"
                required
              />
              <datalist id="assuntos">
                <option value="Novo projeto" />
                <option value="FeedBack" />
                <option value="Outros" />
              </datalist>
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                name="message"
                id="mensagem"
                placeholder="Sua mensagem..."
                maxLength="500"
                required
              ></textarea>
            </div>
          <button type="submit">Enviar mensagem</button>
        </form>
        <legend>Estou ansioso pelo o seu contato!</legend>
      </div>

      <address>
        <a href={linksURL.whatsapp} target="_blank" rel="noreferrer">
          <div className="caixa_btn_contato">
            <div className="fundo_icone_contato">
              <span className="icone_link_whatsapp"></span>
            </div>
            <div>
              <span className="titulo_btn_contato">WhatsApp</span>
              <br />
              Disponível para contato
            </div>
          </div>
        </a>
        <div className="caixa_btn_contato">
          <div className="fundo_icone_contato">
            <span className="icone_link_email"></span>
          </div>
          <div>
            <span className="titulo_btn_contato">Email</span>
            <br />
            <span className="email">{linksURL.email}</span>
          </div>
        </div>
      </address>
    </div>
  );
}
