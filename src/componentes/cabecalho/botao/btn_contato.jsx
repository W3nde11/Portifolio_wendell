import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io">
        <span>Contato</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cssbuttons-io {
    position: relative;
    font-family: var(--fonte-texto);
    font-weight: 500;
    font-size: clamp(0.8rem, 2.5vw, 1rem);
    letter-spacing: 0.05em;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid white;
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: #040b18;
    overflow: hidden;
  }

  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1.2rem);
  }

  .cssbuttons-io::before,
  .cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .cssbuttons-io::before {
    content: "";
    background: white;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  .cssbuttons-io:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  .cssbuttons-io:active {
    transform: scale(0.95);
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
`;

export default Button;
