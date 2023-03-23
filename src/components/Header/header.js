import React from "react";
import "./style.css";
import logo from "./logo.png";


function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Book Reviews</h1>
      <div className="logo-div">
        <img
          classname="logo"
          src={logo}
          style={{ width: 88, height: 80 }}
          alt="logo with tagline: Read freely"
        />
      </div>
    </header>
  );
}

export default Header;
