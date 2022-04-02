import styled from 'styled-components';
import { styledIf } from '../../../index';

export const SubTitle = styled.h4`
  ${({ type }) => (`
    ${styledIf(type === 'created', `
      color: #2fa82f;
    `)}
    
    ${styledIf(type === 'error', `
      color: #af1b1b;
    `)}
  `)}
`;

export const List = styled.ul`
  display: grid;
  gap: 8px;
  flex-grow: 1;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Email = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: red;
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  padding: 22px 0;
  border-bottom: 2px dashed #e5e5e5;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;
