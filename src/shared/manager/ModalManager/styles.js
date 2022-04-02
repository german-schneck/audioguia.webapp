// Dependencies
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 50;
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms linear;
  white-space: initial;
  padding: 2em;
  flex-direction: column;
  width: 100%;
  
  ${({ visible }) => `
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? '1' : '0'};
  `}
`;
