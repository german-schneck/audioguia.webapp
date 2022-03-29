// Dependencies
import styled from 'styled-components';
import { MarginContainer } from '../../index';

export const Layout = styled.header`
  background: #fff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  padding: 8px 18px;
  box-shadow: 0 -2px 4px 2px #efc1c1;
  z-index: 20;
`;

export const Container = styled(MarginContainer)`
  display: flex;
  justify-content: space-between;
`;

export const Logotype = styled.img`
  width: 42px
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Name = styled.span`
  margin-left: 12px;
  font-size: 14px;
`;

export const LogoutButton = styled.button`
  margin-left: 12px;
  border-radius: 34px;
  height: 34px;
  width: 34px;
  border: 0;
  background: #e9e9e9;
  cursor: pointer;
  
  > span {
    position: relative;
    right: -2px;
    top: 1px;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;
`;
