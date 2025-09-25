import styled from "styled-components";

const Status = () => {
  return (
    <StyledWrapper>
      <button
        className="available-for-btn"
        aria-label="Status de trabalho do Wendell Campos"
      >
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        Diponível
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .available-for-btn {
    --animation: 2s ease-in-out infinite;
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: var(--capa-texto-status);
    border-radius: 100px;
    padding: 0.5rem 0.75rem;
    outline: none;
    border: 1px solid;
    font-size: 0.6rem;
    font-weight: 600;
    position: relative;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    background-color: var(--capa-fundo-status);
  }
  .available-for-btn:hover {
    font-weight: 700;
    border: 2px solid var(--capa-texto-status);
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border: solid 2px var(--capa-texto-status);
    border-radius: 50%;
    margin-right: 10px;
    background-color: transparent;
    animation: circle-keys var(--animation);
  }

  .circle .dot {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--capa-texto-status);
    animation: dot-keys var(--animation);
  }

  .circle .outline {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .circle:nth-child(2) {
    animation-delay: 0.3s;
  }
  .circle:nth-child(2) .dot {
    animation-delay: 0.3s;
  }
  .circle:nth-child(1) .outline {
    animation-delay: 0.9s;
  }
  .circle:nth-child(2) .outline {
    animation-delay: 1.2s;
  }
  @keyframes circle-keys {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes dot-keys {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes outline-keys {
    0% {
      transform: scale(0);
      outline: solid 20px var(--color);
      outline-offset: 0;
      opacity: 1;
    }

    100% {
      transform: scale(1);
      outline: solid 0 transparent;
      outline-offset: 20px;
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

export default Status;
