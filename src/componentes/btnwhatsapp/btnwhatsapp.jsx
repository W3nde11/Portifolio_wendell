import styled, { keyframes } from "styled-components";
import icon from '../../../public/32px/whatsapp_btn.svg';

// Animação de pulsar
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  /* Animação de pulsar */
  animation: ${pulse} 2s infinite;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.15);
    animation: none; /* pausa o pulsar no hover */
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
`;

export default function WhatsAppFloat({ linkURL }) {
  return (
    <WhatsAppButton
      aria-label="Chamar conversa pelo whatsapp"
      href={linkURL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icon}
        alt=""
      />
    </WhatsAppButton>
  );
}
