// Dependencies
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(80.75% 80.75% at 50% 19.25%, #FFF5F5 0%, #FFFFFF 100%);
  flex: 1;
`;

export const Container = styled.div`
  width: 916px;
  height: 592px;
  background-color: #fff;
  margin: 2em auto;
  
  display: grid;
  grid-template-columns: 338px 1fr;
  border-radius: 22px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 52px rgba(255, 0, 0, 0.16));
`;

export const Side = styled.div`
  position: relative;

  &.withForm {
    padding: 70px 150px 100px 70px;
  }

  &.withBackground {
    background-image: url("https://images.unsplash.com/photo-1509814047455-cfe301a66b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      content: "";
      z-index: 1;
      background: linear-gradient(180deg,rgb(76 0 1 / 80%) 0%,rgb(179 0 2 / 31%) 100%);
    }
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 44px;
  
  .app-target {
    color: #B40303;
  }
`;

export const Logotype = styled.img`
  position: relative;
  z-index: 2;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 34px -6px rgba(64, 11, 6, 0.5);
`;
