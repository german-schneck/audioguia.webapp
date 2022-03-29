// Dependencies
import styled from 'styled-components';
import { isMobile, MarginContainer } from '../../../../shared/components';

export const Layout = styled(MarginContainer)`
  padding: 6em;
  background: white;
  box-shadow: 0px 0px 13px 0px #fcc;
  position: relative;
  z-index: 1;
  
  ${isMobile(`
    padding: 2em;
  `)}
`;

export const Field = styled.div`
  border-bottom: 1px solid #ffecec;
  padding: 4em 0;

  ${isMobile(`
    padding: 2em 0;
  `)}
  
  &:first-child {
    padding-top: 0;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  padding: 22px;
  border: 2px dashed #f8d5d5;
`;
