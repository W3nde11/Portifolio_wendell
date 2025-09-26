import "./style.css";
import Status from "./status/status";
import Button from "./botao/botao";
import { Helmet } from "react-helmet-async";

export default function Capa({ imgPerfil, TextCapa, document }) {
  return (
    <>
      <Helmet>
        <title>Capa -Wendell Campos</title>
        <meta
          name="description"
          content="Portfólio de Wendell Campos"
        />
      </Helmet>

      <div className="capa">
        <div className="conteudo_capa">
          <div className="imagem_status">
            <figure className="area_img_capa">
              <div className="circulo_primario">
                <div className="circulo_segundario">
                  <img
                    src={imgPerfil}
                    loading="eager"
                    alt="Foto do Wendell Campos sorrindo, homem cabelo ondulado preto, barba completa, vetindo uma camisa laraja em um fundo gradinete azul e lilás"
                    className="foto_capa"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </figure>
            <Status />
          </div>
          <div className="container_texto">
            <div className="container_titulo">
              <h1 className="titulo_principal">Desenvolvedor</h1>
              <span className="titulo_principal_destaque">
                <strong>Web</strong>
              </span>
            </div>

            <aside className="caixa_descricao_capa" aria-label="Texto de abordagem">
              <p className="descricao_capa">{TextCapa}</p>
            </aside>
          </div>
        </div>
        <div
          aria-label="Baixar curriculo do Wendell Campos"
          className="bnt_currico"
        >
          <Button documentURL={document} />
        </div>
      </div>
    </>
  );
}
