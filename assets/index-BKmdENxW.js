import{j as r,d as l}from"./index-Wda8cax1.js";import{u as d}from"./useScrollAnimation-CqJHtL24.js";const p=({linkURL:o})=>r.jsx(m,{children:r.jsxs("a",{"aria-label":"Acessar o site do projeto",href:o,target:"_blanck",children:["Ver",r.jsx("div",{className:"arrow-wrapper",children:r.jsx("div",{className:"arrow"})})]})}),m=l.div`
  a {
    --primary-color: #7f2ccb;
    --secondary-color: white;
    --hover-color: #3f1665;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    color: var(--secondary-color);
    padding: .5rem 1rem;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
  }

  a .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }

  a .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  a:hover {
    background-color: var(--hover-color);
  }

  a:hover .arrow {
    background: var(--secondary-color);
  }

  a:hover .arrow:before {
    right: 0;
  }
    
  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}`;function j({titulo:o,skills:e,resumo:i,link:t,imagem:s,status:n}){return d("container_projeto","animar"),r.jsxs("div",{className:"container_projeto",children:[r.jsx("h3",{className:"titulo_projeto",children:o}),r.jsx("ul",{className:"lista-skills_projeto",children:e.map((a,c)=>r.jsx("li",{className:"item_lista_projetos",children:r.jsx("img",{className:"icone_skill_projetos",src:a.icone,alt:a.texto})},c))}),r.jsx("p",{className:"descricao_projeto",children:i}),r.jsxs("div",{children:[r.jsx("span",{className:"status_projeto",children:n}),r.jsx(p,{linkURL:t})]}),r.jsx("figure",{children:r.jsx("div",{className:"fundo_img_projeto",children:r.jsx("img",{loading:"lazy",className:"imagem_projeto",src:s,alt:"Imagem do projeto",width:407,height:370})})})]})}export{j as default};
