import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Book Reviews</h1>
      <div className="logo-div">
        <img className="logo" src="/src/components/Header/logo.png" alt="logo with tagline" />
      </div>
    </header>
  );
}

export default Header;
