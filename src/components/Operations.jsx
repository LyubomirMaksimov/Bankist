import React, { useState } from "react";
import svgIcon from "../img/icons.svg";

const Operations = () => {
  const [activeIndex, SetActiveIndex] = useState(1);

  const BtnClickHandler = (event, param) => {
    SetActiveIndex(param);
  };

  return (
    <section className="section" id="section-3">
      <div className="section-title">
        <h2 className="section-description">OPERATIONS</h2>
        <h3 className="section-header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>
      <div className="operations">
        <div className="operation-btn-container">
          <button
            className={`operation-btn ${
              activeIndex === 1 ? "operation-btn-active" : ""
            }`}
            id="operation-btn-1"
            onClick={(event) => BtnClickHandler(event, 1)}
          >
            <span>01</span>Instant Transfer
          </button>
          <button
            className={`operation-btn ${
              activeIndex === 2 ? "operation-btn-active" : ""
            }`}
            id="operation-btn-2"
            onClick={(event) => BtnClickHandler(event, 2)}
          >
            <span>02</span>Instant Loadns
          </button>
          <button
            className={`operation-btn ${
              activeIndex === 3 ? "operation-btn-active" : ""
            }`}
            id="operation-btn-3"
            onClick={(event) => BtnClickHandler(event, 3)}
          >
            <span>02</span>Instant Closing
          </button>
        </div>
        <div
          className={`operation-content ${
            activeIndex === 1 ? "operation-content-active" : ""
          }`}
        >
          <div className="operation-icon">
            <img src={svgIcon} alt="icon" id="operation-icon-1" />
          </div>
          <h5 className="operation-title">
            Tranfser money to anyone, instantly! No fees, no BS.
          </h5>
          <p className="operation-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          className={`operation-content ${
            activeIndex === 2 ? "operation-content-active" : ""
          }`}
        >
          <div className="operation-icon">
            <img src={svgIcon} alt="icon" id="operation-icon-2" />
          </div>
          <h5 className="operation-title">
            Buy a home or make your dreams come true, with instant loans.
          </h5>
          <p className="operation-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div
          className={`operation-content ${
            activeIndex === 3 ? "operation-content-active" : ""
          }`}
        >
          <div className="operation-icon">
            <img src={svgIcon} alt="icon" id="operation-icon-3" />
          </div>
          <h5 className="operation-title">
            No longer need your account? No problem! Close it instantly.
          </h5>
          <p className="operation-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Operations;
