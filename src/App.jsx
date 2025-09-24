import "./App.css";
import Cabecalho from "./componentes/cabecalho";
import Capa from "./componentes/capa";
import Sobre from "./componentes/sobre";
import Projetos from "./componentes/projetos";
import Contato from "./componentes/contato";
import Rodape from "./componentes/rodape";
import { useEffect, useState } from "react";
import Skills from "./componentes/softkills";
import curriculo from "./assets/capa/curriculo.pdf";
import img1 from "./assets/swiper/img1.png";
import img2 from "./assets/swiper/img1.png";
import img3 from "./assets/swiper/img1.png";
import img4 from "./assets/swiper/img1.png";
import perfil from "./assets/capa/foto_perfil.svg";
import WhatsAppFloat from "./componentes/btnwhatsapp/btnwhatsapp";
import Loader from "./componentes/carregador";

function App() {
  const listaSobre = [
    "Academia",
    "Praia",
    "Viagens",
    "Minha cachorra",
    "Familia",
    "Amigos",
  ];
  const carrosselImagens = [img1, img2, img3, img4];
  const linksPessoais = {
    linkedin: "https://linkedin.com/in/wendell-campos-0b76651a9",
    github: "https://github.com/W3nde11",
    whatsapp: "https://wa.me/5511913516361",
    email: "campos19ferraz@outlook.com",
    twitter: "https://x.com/W3nde11_C",
  };
  const [dadosSkills, setDadosSkills] = useState([]);
  const [dadosProjetos, setDadosProjetos] = useState([]);

  useEffect(() => {
    fetch("https://w3nde11.github.io/Portifolio_API/skills.json")
      .then((resposta) => resposta.json())
      .then((dadosSkills) => setDadosSkills(dadosSkills));

    fetch("https://w3nde11.github.io/Portifolio_API/projetos.json")
      .then((resposta) => resposta.json())
      .then((dadosProjetos) => setDadosProjetos(dadosProjetos));
  }, []);

  return (
    <>
      <header className="area_cabecalho">
        <Cabecalho className="secao_cabecalho" />
      </header>
      <main className="area_capa" id="id_capa">
        <Capa
          className="secao_capa"
          imgPerfil={perfil}
          TextCapa={
            "Toda inovação vem acompanhada de transparência e dedicação. Cada linha de código, design e solução apresentada neste portfólio, foi criado com foco em resultados reais e personalizados. Aqui á somente o meu trabalho, mas também minha forma de pensar: clara, responsável e aberta ao diálogo."
          }
          status={"Disponivel"}
          document={curriculo}
        />
      </main>
      <WhatsAppFloat linkURL={linksPessoais} />
      <section className="secao_sobre" id="id_sobre">
        <h2 className="titulo">Sobre</h2>
        <Sobre
          DescicaoSobre={
            "Desenvolvedor Web em transição de carreira, com experiência em contabilidade e análise de dados. Apaixonado por tecnologia, com foco em Python, JavaScript e SQL, busco uma oportunidade para atuar em projetos que envolvam tanto o desenvolvimento de sistemas inovadores e/ou análise de dados para tomada de decisões estratégicas."
          }
          Experiencias={
            "Desenvolvedor Web em transição de carreira, com experiência em contabilidade e análise de dados."
          }
          listaSobre={listaSobre}
          FormacaoAcademica={
            "Tecnólogo em Análise e Desenvolvimento de Sistemas"
          }
          escola={"UniPiaget - 2024"}
          FormacaoAcademicaStatus={"Cursando"}
          imagemURL={carrosselImagens}
          linksPessoais={linksPessoais}
        />
      </section>
      <section className="secao_skills" id="id_skills">
        <h2 className="titulo">SoftKills</h2>
        <p className="descricao">
          Conjunto de Tecnologias e Habilidades que utilizo para desenvolver
          soluções robustas e escaláveis.
        </p>
        <ul className="lista_secao_skills">
          {dadosSkills ? (
            dadosSkills.map((item, index) => (
              <li key={index}>
                <Skills
                  id={item.id}
                  titulo={item.titulo}
                  resumo={item.Resumo}
                  skills={item.Skills}
                />
              </li>
            ))
          ) : (
            <Loader />
          )}
        </ul>
      </section>
      <section className="secao_projetos" id="id_projetos">
        <h2 className="titulo">Projetos</h2>
        <ul className="lista_secao_projetos">
          {dadosProjetos ? (
            dadosProjetos.map((item, index) => (
              <li key={index}>
                <Projetos
                  id={item.id}
                  titulo={item.titulo}
                  skills={item.skills}
                  resumo={item.resumo}
                  link={item.link}
                  imagem={item.imagem}
                  status={item.status}
                />
              </li>
            ))
          ) : (
            <Loader />
          )}
        </ul>
      </section>
      <section className="secao_contato" id="id_contato">
        <h2 className="titulo">Contato</h2>
        <p className="descricao">Envie uma mensagem!</p>
        <Contato linksURL={linksPessoais} />
      </section>
      <hr tabIndex="-1"/>
      <footer className="area_rodape">
        <Rodape
          className="secao_rodape"
          frase={
            "Desenvolvedor Web, Apaixonado por fazer ideias se tornar soluções!"
          }
          linkURL={linksPessoais}
          local={"Suzano, Sp - Brasil"}
        />
      </footer>
    </>
  );
}

export default App;
