// Dependencies
import styled from 'styled-components';
import { isMobile, styledIf } from '../../index';
import { ButtonVariants } from './index';

export const Layout = styled.button`
  border-radius: 4px;
  border: none;
  height: 46px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  transition: all 0.2s;
  min-width: 200px;
  
  ${isMobile(`
    width: 100%;
  `)}
  
  ${({ isLoading, variant }) => (`
  
    ${styledIf(variant === ButtonVariants.PRIMARY, `
      ${styledIf(isLoading, `
        background: #dddddd;
        cursor: not-allowed;
      `, `
        background: #EA4242;
        color: #fff;
        
        &:hover {
          background: #f92b2b;
        }
        
        &:active {
          background: #b31b1b;
        }
        
        &[disabled] {
          background: #f5bcbc;
          cursor: not-allowed;
        }
      `)}
    `)}
    
    ${styledIf(variant === ButtonVariants.SECONDARY, `
      ${styledIf(isLoading, `
        background: #dddddd;
        cursor: not-allowed;
      `, `
        border: 1px solid #545454;
        background: transparent;
        color: #545454;
        
        &[disabled] {
          background: #f5bcbc;
          cursor: not-allowed;
        }
      `)}
    `)}
  `)}
`;

export const Caption = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0 22px;
`;
