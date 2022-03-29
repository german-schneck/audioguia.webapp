import styled from 'styled-components';
import { isMobile } from '../../index';

export const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  justify-content: center;
  
  ${isMobile(`
    grid-template-columns: 1fr;
    gap: 22px;
  `)}
`;

export const Data = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  max-width: 500px;
  line-height: 26px;
  font-weight: 600;
  font-size: 24px;
  color: #181818;

  ${isMobile(`
    font-size: 18px;
  `)}
`;

export const Description = styled.p`
  max-width: 500px;
  line-height: 26px;
  font-weight: 300;
  font-size: 16px;
  color: #333;

  b {
    font-weight: 500;
  }
  
  ${isMobile(`
    font-size: 14px;
    line-height: 24px;
  `)}
`;

export const Right = styled.div`
  flex: 0.4;
`;
