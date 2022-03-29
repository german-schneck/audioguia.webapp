// Dependencies
import styled from 'styled-components';
import { styledIf } from '../../index';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
`;

export const Input = styled.input`
  margin-top: 12px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  padding: 12px;
  border: 1px solid #dadada;
  border-radius: 4px;
  outline: none;
  
  ${({ as }) => (`
    ${styledIf(as === 'textarea', `
      min-height: 200px;
      resize: vertical;
    `)}
  `)}
`;

export const Error = styled.span`
  font-size: 11px;
  color: #fa2727;
  padding: 0 12px;
`;

export const Description = styled.div`
  font-size: 13px;
  letter-spacing: 0.2px;
  margin-top: 2px;
`;
