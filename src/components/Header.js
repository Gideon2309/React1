import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img className="logo" src="image/logo.png" alt="logo" />
        <h3 className="logoText">RealFacts</h3>
      </div>
      <h4 className="title">React Course-Project 1</h4>
    </nav>
  );
};

export default Header;
