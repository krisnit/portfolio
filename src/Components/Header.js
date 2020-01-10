import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-home">
      <div className="container">
        <Nav />
        <div className="header-content">
          <h1>RadhaKrishnan - FullStack React Developer</h1>
          <p className="lead">
            I specialize in React, Redux, MongoDB, PostgreSQL, NodeJs, Express,
            HTML, CSS, SASS
          </p>
          <Link className="btn-main" to="/work">
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
