import "./style.css";
import Button from "./botao/btn_contato";

export default function Cabecalho({logoURL, logoPartURL}) {
  return (
    <div className="cabecalho">
      <figure>
        <img
          src={logoURL}
          alt="Logo do site De Campos"
          className="icone"
          loading="lazy"
          width={36}
          height={40}
        />
        <img
          src={logoPartURL}
          aria-hidden="true"
          alt=""
          className="logo viwer_pc"
          loading="lazy"
          width={125}
          height={40}
        />
      </figure>
      <div className="acao">
        <a
          aria-label="Ir para seção de contato"
          href="#id_contato"
          className="btn-contato_cabecalho"
        >
          <Button />
        </a>
      </div>
      <nav className="navegacao_cabecalho" aria-label="Navegação principal">
        <ul className="lista-links_cabecalho">
          <li className="lista-item_cabecalho">
            <a
              aria-label="Ir para o inicio da página"
              href="#main"
              className="link_cabecalho"
            >
              Home
            </a>
          </li>
          <li className="lista-item_cabecalho">
            <a
              aria-label="Ir para seção sobre min, Wendell Campos"
              href="#id_sobre"
              className="link_cabecalho"
            >
              Sobre
            </a>
          </li>
          <li className="lista-item_cabecalho">
            <a
              aria-label="Ir para seção habilidades técnicas"
              href="#id_skills"
              className="link_cabecalho"
            >
              SoftKills
            </a>
          </li>
          <li className="lista-item_cabecalho">
            <a
              aria-label="Ir para seção de projetos"
              href="#id_projetos"
              className="link_cabecalho"
            >
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
