import "./style.css";
import Status from "./status/status";
import Button from "./botao/botao";

export default function Capa({ imgPerfil, TextCapa, document }) {
  return (
    <div className="capa">
      <div className="conteudo_capa">
        <div className="imagem_status">
          <figure className="area_img_capa">
            <div className="circulo_primario">
              <div className="circulo_segundario">
                <img
                  src={imgPerfil}
                  loading="lazy"
                  alt="Foto do Wendell Campos sorrindo"
                  className="foto_capa"
                />
              </div>
            </div>
          </figure>
          <Status />
        </div>
        <div className="container_texto">
          <div className="container_titulo">
            <h1 className="titulo_principal">
              Desenvolvedor</h1>
              <span className="titulo_principal_destaque">
                <strong>Web</strong>
              </span>
          </div>
          
        <aside className="caixa_descricao_capa">
          <p className="descricao_capa">{TextCapa}</p>
        </aside>
        </div>
      </div>
      <div aria-label="Baixar curriculo do Wendell Campos" className="bnt_currico">
        <Button documentURL={document} />
      </div>
    </div>
  );
}
