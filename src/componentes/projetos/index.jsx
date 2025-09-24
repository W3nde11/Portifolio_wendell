import Button from "./botao/botao";
import "./style.css";

export default function Projetos({
  titulo,
  skills,
  resumo,
  link,
  imagem,
  status,
}) {
  return (
    <div className="container_projeto">
      <h3 className="titulo_projeto">{titulo}</h3>
      <ul className="lista-skills_projeto">
        {skills.map((skill, index) => (
          <li key={index} className="item_lista_projetos">
            <img
              className="icone_skill_projetos"
              src={skill.icone}
              alt={skill.texto}
            />
          </li>
        ))}
      </ul>
      <p className="descricao_projeto">{resumo}</p>
      <div>
        <span className="status_projeto">{status}</span>
        <Button linkURL={link} />
      </div>
      <figure>
        <div className="fundo_img_projeto">
          <img
            loading="lazy"
            className="imagem_projeto"
            src={imagem}
            alt="Imagem do projeto"
          />
        </div>
      </figure>
    </div>
  );
}
