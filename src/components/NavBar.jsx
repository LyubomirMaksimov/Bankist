import React from "react";
import Logo from "../img/logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar .sticky">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Operations
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Testemonials
          </a>
        </li>
        <button onClick={props.openModal} className="nav-btn">
          Open Account
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
