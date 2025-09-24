import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ThemeToggle() {
  const [active, setActive] = useState(false);
  const [tema, setTema] = useState("dark"); // começa no claro

  // Atualiza o <html data-contexto="...">
  useEffect(() => {
    document.documentElement.setAttribute("data-contexto", tema);
  }, [tema]);

  const handleClick = () => {
    setActive(!active);
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <StyledWrapper>
      <button
        aria-label="Trocar o tema para modo claro ou escuro."
        className={`theme__icon ${active ? "active" : ""}`}
        onClick={handleClick}
      >
        <span></span> {/* sol */}
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span></span> {/* lua */}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* reset */
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
  }

  .theme__icon {
    width: 32px;
    height: 32px;
    padding: 4px;
    overflow: hidden;
    position: relative;
  }

  /* sol */
  .theme__icon > :nth-child(1) {
    width: 14px;
    height: 14px;
    border-radius: 24px;
    border: 1px solid var(--backGround-body);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 204, 0);
    transition: width 0.4s, height 0.4s, border 0.4s, background-color 0.4s;
    z-index: 10;
  }

  /* cruz */
  .theme__icon > :nth-child(2) {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.4s;
  }

  .theme__icon > :nth-child(2) > :nth-child(1),
  .theme__icon > :nth-child(2) > :nth-child(2),
  .theme__icon > :nth-child(2) > :nth-child(3),
  .theme__icon > :nth-child(2) > :nth-child(4) {
    background-color: rgb(255, 204, 0);
    border-radius: 2px;
    position: relative;
  }

  .theme__icon > :nth-child(2) > :nth-child(1) {
    display: block;
    width: 2px;
    height: 24px;
    left: 50%;
    transform: translateX(-50%);
  }

  .theme__icon > :nth-child(2) > :nth-child(2) {
    display: block;
    width: 24px;
    height: 2px;
    top: -54%;
    left: 50%;
    transform: translateX(-50%);
  }

  .theme__icon > :nth-child(2) > :nth-child(3) {
    display: block;
    width: 24px;
    height: 2px;
    top: -60%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .theme__icon > :nth-child(2) > :nth-child(4) {
    display: block;
    width: 24px;
    height: 2px;
    top: -70%;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
  }

  /* lua */
  .theme__icon > :nth-child(3) {
    width: 20px;
    height: 20px;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    background-color: #040b18;
    transition: top 0.4s, left 0.4s;
    transition-delay: 0.2s;
    z-index: 20;
  }

  /* ----------------- */
  /* ESTADOS ATIVOS    */
  /* ----------------- */
  .theme__icon.active > :nth-child(1) {
    width: 24px;
    height: 24px;
    border: 1px solid rgb(245, 245, 247);
    background-color: rgb(245, 245, 247);
  }

  .theme__icon.active > :nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg) scale(0.8);
  }

  .theme__icon.active > :nth-child(3) {
    top: 35%;
    left: 40%;
  }
`;
