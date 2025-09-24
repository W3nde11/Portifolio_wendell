import "./style.css";
import ThemeToggle from "./tema/ThemeToggle";
import Logo1 from "../../../public/logo_part1.png";
import Logo2 from "../../../public/logo_part2.png";
import Button from "./botao/btn_contato";

export default function Cabecalho() {
  
  return (
    <div className="cabecalho">
      <figure>
        <img src={Logo1} alt="Logo do site De Campos" className="icone" />
        <img src={Logo2} alt="" className="logo viwer_pc" />
      </figure>
      <div className="acao">
        <a aria-label="Ir para seção de contato" href="#id_contato" className="btn-contato_cabecalho">
          <Button />
        </a>
        <ThemeToggle />
      </div>
      <nav className="navegacao_cabecalho">
        <ul className="lista-links_cabecalho">
          <li className="lista-item_cabecalho">
            <a aria-label="Ir para o inicio da página" href="#id_capa" className="link_cabecalho">
              Home
            </a>
          </li>
          <li className="lista-item_cabecalho">
            <a aria-label="Ir para seção sobre min, Wendell Campos" href="#id_sobre" className="link_cabecalho">
              Sobre
            </a>
          </li>
          <li className="lista-item_cabecalho">
            <a aria-label="Ir para seção habilidades técnicas" href="#id_skills" className="link_cabecalho">
              SoftKills
            </a>
          </li>
          <li className="lista-item_cabecalho">
            <a aria-label="Ir para seção de projetos" href="#id_projetos" className="link_cabecalho">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
