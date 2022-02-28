// Dependencies
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 12px;
`;

export const SelectorView = styled.div`
  background: white;
  border-radius: 4px;
  border: 1px solid #dadada;
  position: relative;
  user-select: none;
`;

export const ItemSelected = styled.div`
  padding: 12px 22px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  position: absolute;
  background: white;
  width: 100%;
  box-shadow: 0 5px 11px 3px #0000002b;
  top: 109%;
  border-radius: 4px;
`;

export const Item = styled.li`
  padding: 12px 22px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #00000010;
  }
`;

export const Value = styled.span``;
