import React from "react";
import ImgDigital from "../img/digital.jpg";
import ImgGrow from "../img/grow.jpg";
import ImgCard from "../img/card.jpg";
import IconImg from "../img/icons.svg";

const Features = () => {
  return (
    <section className="section" id="section-2">
      <div className="section-title">
        <h2 className="section-description">FEATURES</h2>
        <h3 className="section-header">
          Everything you need in a modern bank and more.
        </h3>
      </div>
      <div className="features">
        <img src={ImgDigital} alt="" className="feature-img img-1" />

        <div className="feature-info info-1">
          <div className="feature-icon">
            <svg></svg>
          </div>
          <h5 className="feature-title">100% digital bank</h5>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div className="feature-info info-2">
          <div className="feature-icon">
            <svg></svg>
          </div>
          <h5 className="feature-title">Watch your money grow</h5>
          <p className="feature-text">
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>

        <img src={ImgGrow} alt="" className="feature-img img-2" />

        <img src={ImgCard} alt="" className="feature-img img-3" />

        <div className="feature-info info-3">
          <div className="feature-icon">
            <svg></svg>
          </div>
          <h5 className="feature-title">Free debit card included</h5>
          <p className="feature-text">
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
