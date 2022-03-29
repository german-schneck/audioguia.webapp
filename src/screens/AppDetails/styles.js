// Dependencies
import styled from 'styled-components';
import { MarginContainer } from '../../shared/components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div``;

export const Wrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1605654464243-3668a4c0de3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80');
  min-height: 300px;
  width: 100%;
  background-size: cover;
  display: flex;
  position: relative;
  background-position: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.31);
  }
`;

export const AppLogo = styled.img`
  width: 82px;
  height: 82px;
  margin-bottom: 22px;
`;

export const Title = styled.h3`
  padding: 0;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Location = styled.p`
  margin: 0;
  padding: 0;
  color: #c4c4c4;
  font-weight: 300;
  font-size: 14px;
`;

export const Container = styled(MarginContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

export const NavigatorWrapper = styled.div`
    box-shadow: 0 2px 12px rgb(255 160 160 / 22%);
    background: #fff;
    position: relative;
    z-index: 3;
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const NavIcon = styled.div`
  display: block;
  margin-bottom: 4px;
`;

export const NavItem = styled(NavLink)`
  color: #3a3a3a;
  text-decoration: none;
  padding: 16px 22px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    background: #ffeeee;
    color: #e54d4d !important;
    
    ${NavIcon} {
      color: #e54d4d !important;
    }
  }

  &:last-child {
    border-right: none;
  }
`;

export const NavText = styled.span``;
