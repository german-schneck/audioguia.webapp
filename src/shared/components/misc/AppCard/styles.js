// Dependencies
import styled from 'styled-components';
import { styledIf } from '../../index';
import { appStateTypesId } from '../../../types/apps';

export const Layout = styled.div`
  ${({ backgroundImage }) => (`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-color: #000;
    height: 280px;
    background-size: cover;
    border-radius: 8px;
    background-position: center;
  `)}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 1px 44px 14px #e5e5e5;
  cursor: pointer;
  transition: all .5s;
  position: relative;
  user-select: none;
  
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  &:not([disabled]):hover {
    box-shadow: 0 1px 44px 14px #cecece;
  }
`;

export const Container = styled.div`
  display: flex;
  background: white;
  padding: 22px;
  border-radius: 0 0 6px 6px;
  height: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
  justify-content: space-between;
`;

export const Data = styled.div``;

export const Title = styled.h4`
  font-weight: 500;
`;

export const State = styled.span`
    border-radius: 4px;
    padding: 4px;
    display: inline-flex;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    margin-top: 8px;
  
  ${({ state }) => (`
    ${styledIf(state === appStateTypesId.READY_TO_BUY, `
      background: #4d71cf;
    `)}
    
    ${styledIf(state === appStateTypesId.ALREADY_PURCHASED, `
      background: #4dcf5e;
    `)}
    
    ${styledIf(state === appStateTypesId.UNAVAILABLE, `
      background: #989898;
    `)}
  `)}
`;
