import './style.css';

export default function Skills({titulo, resumo, skills}) {
  return (
      <div className="container_card">
          <h3 className="titulo_card">{titulo}</h3>
          <p className="resumo_card">{resumo}</p>
          <ul className="lista_skills_card">
          {skills.map((skill, index) => (
            <li key={index} className="item_lista_skills">
                <img src={skill.icone} alt='icone da Skill' className="icone_skill"/>
                <span className="nome_skill">{skill.texto}</span>
            </li>
          ))}
          </ul>
      </div>
  );
}
