// Dependencies
import styled from 'styled-components';
import { isMobile } from '../../index';

export const Layout = styled.div``;

export const Text = styled.h1`
  font-size: 32px;
  line-height: 32px;
  font-weight: 300;
  color: #b02829;
  margin: 0;
`;

export const Description = styled.p`
  max-width: 50%;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;

  ${isMobile(`
    max-width: 100%;
  `)}
`;
