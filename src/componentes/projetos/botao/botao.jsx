
import styled from 'styled-components';

const Button = ({linkURL}) => {
  return (
    <StyledWrapper>
      <a aria-label="Acessar o site do projeto" href={linkURL} target='_blanck'>
        Ver
        <div className="arrow-wrapper">
          <div className="arrow" />
        </div>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
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
}`;

export default Button;
