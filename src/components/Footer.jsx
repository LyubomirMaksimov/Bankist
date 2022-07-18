import React from "react";
import Icon from "../img/icon.png";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="/">
            About
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Pricing
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Terms of Use
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Careers
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Blog
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Contact Us
          </a>
        </li>
      </ul>
      <img src={Icon} alt="Logo" className="footer__logo" />
      <p className="footer__copyright">
        &copy; Copyright by
        <a
          className="footer__link twitter-link"
          // target="_blank"
          href="https://twitter.com/jonasschmedtman"
        >
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own product.
      </p>
    </footer>
  );
};

export default Footer;
