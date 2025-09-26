import "./style.css";
import logo from "../../../public/logo_decampos.webp";

export default function Rodape({ frase, linkURL, local }) {
  return (
    <div className="rodape">
      <div>
        <img src={logo} alt="Logo do site DE Campos" className="logo_site" />
        <p className="texto">
          <small>{frase}</small>
        </p>
        <address>
          <ul className="lista_redes_rodape">
            <li className="item_lista_redes">
              <a
                aria-label="Ir para a página do GitHub do Wendell Campos"
                href={linkURL.github}
                className="link_redes_rodape"
                target="_blank"
              >
                <span className="github"></span>
              </a>
            </li>
            <li className="item_lista_redes">
              <a
                aria-label="Ir para a página do Linkedin do Wendell Campos"
                href={linkURL.linkedin}
                className="link_redes_rodape"
                target="_blank"
              >
                <span className="linkedin"></span>
              </a>
            </li>
            <li className="item_lista_redes">
              <a
                aria-label="Ir para a página do Twitter do Wendell Campos"
                href={linkURL.twitter}
                className="link_redes_rodape"
                target="_blank"
              >
                <span className="twitter"></span>
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div>
        <h3 className="subtitulo subtitulo_rodape">Links Rápidos</h3>
        <ul className="lista_navegacao_rodape">
          <li className="item_navegacao_rodape">
            <a
              aria-label="Ir para o inicio da página De Campos"
              href="#main"
              className="link_navegacao_rodape"
            >
              Home
            </a>
          </li>
          <li className="item_navegacao_rodape">
            <a
              aria-label="Ir para a seção sobre mim de Wendell Campos"
              href="#id_sobre"
              className="link_navegacao_rodape"
            >
              Sobre
            </a>
          </li>
          <li className="item_navegacao_rodape">
            <a
              aria-label="Ir para a seção de habilidades técnicas"
              href="#id_skills"
              className="link_navegacao_rodape"
            >
              SofitKills
            </a>
          </li>
          <li className="item_navegacao_rodape">
            <a
              aria-label="Ir para a seção de projetos"
              href="#id_projetos"
              className="link_navegacao_rodape"
            >
              Projetos
            </a>
          </li>
        </ul>
      </div>
      <address className="container_rodape">
        <h3 className="subtitulo subtitulo_rodape">Segue</h3>
        <span className="email">{linkURL.email}</span>
        <br />
        <span className="local">{local}</span>
      </address>
    </div>
  );
}
