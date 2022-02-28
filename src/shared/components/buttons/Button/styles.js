// Dependencies
import styled from 'styled-components';

export const Layout = styled.button`
  background: #EA4242;
  border-radius: 4px;
  border: none;
  height: 46px;
  width: 100%;
  max-width: 180px;
  cursor: pointer;

  &[disabled] {
    background: #f5bcbc;
    cursor: not-allowed;
  }
`;

export const Caption = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #FFFFFF;
  text-transform: uppercase;
`;
