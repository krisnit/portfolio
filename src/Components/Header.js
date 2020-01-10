import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="header-home">
      <div class="container">
        <Nav />
        <div class="header-content">
          <h1>I am Radhakrishnan - FullStack React Developer</h1>
          <p class="lead">
            I specialize in React, Redux, MongoDB, PostgreSQL, NodeJs, Express,
            HTML, CSS, SASS, Docker, Jenkins, Ansible
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
