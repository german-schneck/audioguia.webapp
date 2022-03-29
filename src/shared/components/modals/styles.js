import styled from 'styled-components';

export const ModalContainer = styled.div`
  border-radius: 12px;
  box-shadow: 0 12px 11px #0000000f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  
${({ padding, maxWidth }) => `
    width: 100%;
    max-width: ${maxWidth};  
    padding: ${padding ?? '2rem'};
  `};
  user-select: none;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 16px;
  color: #131313;
  margin-bottom: 18px;
`;

export const Body = styled.div`
  text-align: ${props => props.textAlign ?? 'center'};
  font-size: 14px;
  color: #303030;
  line-height: 24px;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, minmax(0%, 100%));
  grid-column-gap: 22px;
  grid-row-gap: 22px;
  margin-top: 32px;
  width: 100%;
`;
