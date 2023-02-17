import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <Header>
      <nav>
        <NavLink to={"/"}>
          <h1>Capture</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink to={"/"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/our-work"}>Our Work</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

const Header = styled.div`
  padding: 1rem 10rem;
  height: 10vh;
  background-color: #282828;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        color:#ccc;
        margin: 0 2rem;
        list-style: none;
      }
    }

    h1 {
      font-family: "lobster";
      color: #ccc;
    }
  }
`;

export default Nav;
