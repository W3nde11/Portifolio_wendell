import styled from "styled-components";

const Button = ({ documentURL }) => {
  return (
    <StyledWrapper>
      <a href={documentURL} className="beautiful-button" target="_blank">
        Currículo
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .beautiful-button {
    position: relative;
    display: inline-block;
    background: linear-gradient(to bottom, #3f1665, #7f2ccb);
    /* Gradient background */
    color: white;
    /* White text color */
    font-family: var(--fonte-texto);
    /* Stylish and legible font */
    font-weight: bold;
    font-size: clamp(1rem, 2vw, 1.2rem);
    /* Large font size */
    border: none;
    /* No border */
    border-radius: 30px;
    /* Rounded corners */
    padding: clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1.2rem);
    /* Large padding */
    cursor: pointer;
    /* Cursor on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    /* Subtle shadow */
    animation: button-shimmer 2s infinite;
    transition: all 0.3s ease-in-out;
    /* Smooth transition */
  }

  /* Hover animation */
  .beautiful-button:hover {
    animation: button-particles 1s ease-in-out infinite;
    transform: translateY(-2px);
  }

  /* Click animation */
  .beautiful-button:active {
    transform: scale(0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  /* Shimmer animation */
  @keyframes button-shimmer {
    0% {
      background-position: left top;
    }

    100% {
      background-position: right bottom;
    }
  }

  /* Particle animation */
  @keyframes button-particles {
    0% {
      background-position: left top;
    }

    100% {
      background-position: right bottom;
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

export default Button;
