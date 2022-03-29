// Dependencies
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(42, 42, 42, 0.1);
  z-index: 50;
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms linear;
  white-space: initial;
  padding: 0 22px;
  
  ${({ visible }) => `
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? '1' : '0'};
  `}
`;
