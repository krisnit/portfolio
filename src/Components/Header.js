import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header-home">
      <div className="container">
        <Nav />
        <div className="header-content">
          <h1>I am Radhakrishnan - FullStack React Developer</h1>
          <p className="lead">
            I specialize in React, Redux, MongoDB, PostgreSQL, NodeJs, Express,
            HTML, CSS, SASS, Docker, Jenkins, Ansible
          </p>
          <Link to="/work">View My Work</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
