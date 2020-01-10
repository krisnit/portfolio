import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/rklogo.svg";

const Nav = () => {
  return (
    <>
      <nav id="main-nav">
        <img src={logo} alt="logo" id="logo" />
        <ul>
          <li>
            <Link to="/index">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
