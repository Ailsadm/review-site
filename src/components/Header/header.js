import React from 'react';
import './style.css';



function Header() {
    return (
      <header className="header">
        <h1 className="header__title">Book Reviews</h1>
        <div className="logo"></div>
        <img src="src/components/Header/logoHeader.png" alt="logo book with message"/>
      </header>
    );
}








export default Header;