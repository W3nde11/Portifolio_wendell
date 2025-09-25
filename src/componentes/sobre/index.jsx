import "./styles.css";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Sobre({
  DescicaoSobre,
  Experiencias,
  listaSobre,
  FormacaoAcademica,
  escola,
  FormacaoAcademicaStatus,
  imagemURL,
  linksPessoais,
}) {
  return (
    <>
      <Helmet>
        <title>Sobre -Wendell Campos</title>
        <meta name="description" content="Conheça um pouco da minha trajetoria e qualificações" />
      </Helmet>

      <section className="sobre">
        <div className="container_texto_sobre">
          <p className="caixa_texto">{DescicaoSobre}</p>
          <h3 className="subtitulo">Experiências</h3>
          <p className="caixa_texto">{Experiencias}</p>
          <h3 className="subtitulo">Coisa que eu amo</h3>
          <div className="caixa_texto">
            <ul className="lista_coisas-que-amo">
              {listaSobre.map((item, index) => (
                <li key={index} className="item_lista-coisas-que-amo">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="caixa_formacao_academica">
          <div>
            <span aria-hidden="true" className="caixa_icone">
              <span className="icone_formacao_academica"></span>
            </span>
            <h3 className="subtitulo_formacao_academica">Formação Acadêmica</h3>
          </div>
          <p className="texto_formacao_academica">
            {FormacaoAcademica}
            <br />
            {escola}
          </p>
          <p className="status_curso">{FormacaoAcademicaStatus}</p>
        </aside>

        <div className="container-veja_sobre">
          <figure>
            <div className="carrossel-container">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
              >
                {imagemURL.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-content">
                      <img
                        className="imagem_carrossel"
                        loading="lazy"
                        src={img}
                        alt={`Slide ${index}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </figure>

          <div className="container_redes">
            <p>Veja mais:</p>
            <address>
              <a
                aria-label="Ir para à página do twitter de Wendell Campos"
                href={linksPessoais.twitter}
                target="_blank"
              >
                <span className="icone_twitter"></span>
              </a>
              <a
                aria-label="Ir para à página do Linkedin de Wendell Campos"
                href={linksPessoais.linkedin}
                target="_blank"
              >
                <span className="icone_linkedin"></span>
              </a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
