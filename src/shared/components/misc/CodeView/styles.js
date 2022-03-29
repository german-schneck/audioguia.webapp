import styled from 'styled-components';
import { isMobile, styledIf } from '../../index';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Code = styled.input`
  border: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  width: 100px;
  user-select: none;
  
`;

export const Action = styled.button`
  border: 0;
  border-radius: 100%;
  width: 34px;
  height: 34px;
  background: #efefef;
  align-items: center;
  justify-content: center;
  display: flex;

  span {
    position: relative;
    top: 1px;
  }
  
  ${({ isGreen }) => (`
    ${styledIf(isGreen, `
      background: #5bd05b;
      cursor: default;
    `, `
      cursor: pointer;
    `)}
  `)}
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;
