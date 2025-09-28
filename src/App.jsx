import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy, useEffect, useState } from "react";
import Cabecalho from "./componentes/cabecalho";
import Capa from "./componentes/capa";
import Rodape from "./componentes/rodape";
import Skills from "./componentes/softkills";
import WhatsAppFloat from "./componentes/btnwhatsapp/btnwhatsapp";
import Loader from "./componentes/carregador/loaders";
import LogoP from "../public/logo_part1.webp";
import LogoS from "../public/logo_part2.webp";
import img1 from "./assets/swiper/img1.webp";
import img2 from "./assets/swiper/img2.webp";
import img3 from "./assets/swiper/img3.webp";
import img4 from "./assets/swiper/img4.webp";
import img5 from "./assets/swiper/img5.webp";
import perfil from "./assets/capa/foto_perfil.webp";
import logo from "../public/logo_decampos.webp";

function App() {
  const listaSobre = [
    "👨‍👩‍👧‍👦 Familia",
    "👯 Amigos",
    "🌴 Praia",
    "✈️ Viagens",
    "🐶 Cachorros",
    "🏋️ Academia",
  ];
  const carrosselImagens = [img1, img2, img3, img4, img5];

  const linksPessoais = {
    linkedin: "https://linkedin.com/in/wendell-campos-0b76651a9",
    github: "https://github.com/W3nde11",
    whatsapp: "https://wa.me/5511913516361",
    email: "campos19ferraz@outlook.com",
    twitter: "https://x.com/W3nde11_C",
  };

  const Sobre = lazy(() => import("./componentes/sobre"));
  const Projetos = lazy(() => import("./componentes/projetos"));
  const Contato = lazy(() => import("./componentes/contato"));

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

    <HelmetProvider>
      <header className="area_cabecalho">
        <Cabecalho
          className="secao_cabecalho"
          logoURL={LogoP}
          logoPartURL={LogoS}
        />
      </header>

      <main className="area_capa" id="main">
        <Capa
          className="secao_capa"
          imgPerfil={perfil}
          TextCapa={
            "Em transição de carreira, com experiência em contabilidade e análise de dados. Apaixonado por tecnologia, busco contribuir em projetos inovadores com dedicação, confiança e soluções personalizadas."
          }
          status={"Disponivel"}
          document={
            "https://drive.google.com/file/d/1TfWszaDDHvNHm0BZRJlqCzGKVz-zlGiU/view?usp=drive_link"
          }
        />
      </main>

      <WhatsAppFloat linkURL={linksPessoais} />

      <section className="secao_sobre" id="id_sobre">
        <h2 className="titulo" id="id_area_sobre">
          Sobre
        </h2>
        <Suspense fallback={<p>Carregando seção...</p>}>
          <Sobre
            DescicaoSobre={
              "Motivado pela oportunidade de contribuir com soluções digitais inovadoras e de alto impacto, trago uma trajetória que combina experiência em contabilidade e análise de dados para tomada de decisão., junto ao desenvolvimento de soluções tecnológicas personalizadas, com forte direcionamento para a criação de sites modernos, responsivos e centrados na experiência do usuário."
            }

            Experiencias={
              "Possuo experiência prática em desenvolvimento front-end e back-end, com domínio de HTML, CSS, JavaScript, React, Node, SQL e Python. Sólida compreensão de conceitos de SEO, responsividade, acessibilidade, boas práticas de performance e integração com APIs. Também desenvolvi projetos que priorizam interfaces intuitivas e funcionais, sempre com atenção aos detalhes e foco em entregar soluções de alto valor para os usuários."
            }

            listaSobre={listaSobre}
            FormacaoAcademica={
              "Tecnólogo em Análise e Desenvolvimento de Sistemas"
            }

            escola={"UniPiaget - 2024"}
            
            FormacaoAcademicaStatus="Cursando"
            imagemURL={carrosselImagens}
            linksPessoais={linksPessoais}
          />
        </Suspense>
      </section>

      <section className="secao_skills" id="id_skills">
        <h2 className="titulo skills_titulo" id="id_area_skills">
          SoftKills
        </h2>
        <p className="descricao skills_texto">
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
        <h2 className="titulo" id="id_area_projetos">
          Projetos
        </h2>
        <Suspense fallback={<p>Carregando seção...</p>}>
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
        </Suspense>
      </section>

      <section className="secao_contato" id="id_contato">
        <h2 className="titulo" id="id_area_contatos">
          Contato
        </h2>
        <p className="descricao">Envie uma mensagem!</p>
        <Suspense fallback={<p>Carregando seção...</p>}>
          <Contato linksURL={linksPessoais} />
        </Suspense>
      </section>

      <hr tabIndex="-1" />

      <footer className="area_rodape">
        <Rodape
          className="secao_rodape"
          logoRURL={logo}
          frase={
            "Desenvolvedor Web, Apaixonado por fazer ideias se tornar soluções!"
          }
          linkURL={linksPessoais}
          local={"Suzano, Sp - Brasil"}
        />
      </footer>
    </HelmetProvider>
  );
}

export default App;
