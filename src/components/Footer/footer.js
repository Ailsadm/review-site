import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="hyperlinks">
        <h6>
          <a id="contact" href="#">Contact</a>

          <li>Address</li>
          <li>142 Silvermere Road, London,SE6 4QT</li>
        </h6>
        <h6>
          <a id="blog" href="#">Blog</a>
          <li>Newsletter</li>
        </h6>
        <h6>
          <a id="socials" href="#">Socials</a>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </h6>
      </div>
      <div className="copy">
        <p>© Copyright@ Book Reviews Website</p>
      </div>
    </footer>
  );
}

export default Footer;
