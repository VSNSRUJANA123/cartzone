import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div className="logo-container">
          <img src="./images/logo.png" alt="logo-image" className="logo" />
          <h4 className="logo-title">CartZone</h4>
        </div>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 6rem;
    width: 13rem;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo-title {
    margin: 0;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;
export default Header;
