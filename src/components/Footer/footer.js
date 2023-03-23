import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="hyperlinks">
        <h6>
          <a href="#">Contact</a>

          <li>Address</li>
          <li>142 Silvermere Road, London,SE6 4QT</li>
        </h6>
        <h6>
          <a href="#">Blog</a>
          <li>Newsletter</li>
        </h6>
        <h6>
          <a href="#">Socials</a>
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Instagram</li>
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
