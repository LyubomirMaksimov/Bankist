import React from "react";

const Module = (props) => {
  return (
    <div className={`modal ${props.modalHidden ? "hidden" : ""}`}>
      <button onClick={props.hideModal} className="btn--close-modal">
        &times;
      </button>
      <h2 className="modal__header">
        Open your bank account <br />
        in just <span className="highlight">5 minutes</span>
      </h2>
      <form className="modal__form">
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Email Address</label>
        <input type="email" />
        <button className="signup-btn">Next step &rarr;</button>
      </form>
    </div>
  );
};

export default Module;
