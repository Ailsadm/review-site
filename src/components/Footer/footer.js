import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footerLinks">
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Socials</a>
        </li>
      </ul>
      <p className="copy">© Copyright@ Book Reviews Website</p>
    </footer>
  );
}

export default Footer;
