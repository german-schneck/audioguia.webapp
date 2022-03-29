// Dependencies
import styled from 'styled-components';
import { isMobile } from '../../shared/components';

export const Layout = styled.div`
  background: radial-gradient(80.75% 80.75% at 50% 19.25%, #FFF5F5 0%, #FFFFFF 100%);
  flex: 1;
  padding: 18px;
`;

export const Field = styled.div`
  margin: 2em 0 3em 0;
`;

export const AppList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
  
  ${isMobile(`
    grid-template-columns: 1fr;
  `)}
`;
