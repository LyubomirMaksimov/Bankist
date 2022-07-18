import React from "react";
import headerImg from "../img/hero.png";
const Header = () => {
  return (
    <header className="header" id={"section-1"}>
      <div className="header-title">
        <h1>
          When <snap className="highlight">banking</snap> meets{" "}
          <snap className="highlight">minimalist</snap>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <a href="/">Learn more ↓</a>
      </div>
      <img src={headerImg} alt="" className="header-img" />
    </header>
  );
};

export default Header;
