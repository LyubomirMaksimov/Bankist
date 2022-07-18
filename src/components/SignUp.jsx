import React from "react";

const SignUp = (props) => {
  return (
    <section className="section section--sign-up">
      <div className="section__title">
        <h3 className="section__header">
          The best day to join Bankist was one year ago. The second best is
          today!
        </h3>
      </div>
      <button onClick={props.openModal} className="signup-btn btn--show-modal">
        Open your free account today!
      </button>
    </section>
  );
};

export default SignUp;
