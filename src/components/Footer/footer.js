import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="hyperlinks">
        <h6>
          <a href="#">Contact</a>
          <ul>
            <li>Adress</li>
            <li>142 Silvermere Road, London,SE6 4QT</li>
          </ul>
        </h6>
        <h6>
          <a href="#">Blog</a>
        </h6>
        <h6>
          <a href="#">Socials</a>
        </h6>
      </div>
      <br></br>
      <div>
        <p className="copy">© Copyright@ Book Reviews Website</p>
      </div>
    </footer>
  );
}

export default Footer;
