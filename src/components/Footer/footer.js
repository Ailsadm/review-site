import React from "react";
import "./style.css";
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer d-flex flex-column justify-content-around text-center">
      <Container className="hyperlinks d-flex flex-column flex-md-row justify-content-between flex-wrap">
        <div className="d-flex flex-column mb-3 mb-md-0">
          <h6><a id="contact" href="#">Contact</a></h6>
          <p className="mb-1">Address</p>
          <p className="mb-0">142 Silvermere Road, London,SE6 4QT</p>
        </div>
        <div className="d-flex flex-column mb-3 mb-md-0">
          <h6><a id="blog" href="#">Blog</a></h6>
          <p className="mb-0">Newsletter</p>
        </div>
        <div className="d-flex flex-column">
          <h6><a id="socials" href="#">Socials</a></h6>
          <ul className="list-unstyled mb-0">
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </Container>
      <div className="copy">
        <p className="text-sm mb-0">© Book Reviews Website</p>
      </div>
    </footer>
  );
}

export default Footer;
