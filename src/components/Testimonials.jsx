import React, { useState } from "react";
import User1 from "../img/user-1.jpg";
import User2 from "../img/user-2.jpg";
import User3 from "../img/user-3.jpg";

const Testimonials = () => {
  const [activeIndex, SetActiveIndex] = useState(1);

  const LeftBtnHandler = () => {
    let index = activeIndex;
    index = index - 1;

    if (index < 1) {
      index = 3;
    }
    SetActiveIndex(index);
  };

  const RightBtnHandler = () => {
    let index = activeIndex;
    index = index + 1;

    if (index > 3) {
      index = 1;
    }
    SetActiveIndex(index);
  };

  return (
    <section className="section" id="section-4">
      <div className="section-title">
        <h2 className="section-description">NOT SURE YET?</h2>
        <h3 className="section-header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>
      <div className="slider">
        <div
          className={`slide ${activeIndex === 1 ? "slide-active" : ""}`}
          id="slide-1"
        >
          <div className="testimonial">
            <h5 className="quote-title">Best financial decision ever!</h5>
            <p className="quote-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </p>
            <address className="quote-author">
              <img src={User1} alt="" className="author-photo" />
              <h6 className="author-name">Aarav Lynn</h6>
              <p className="author-location">San Francisco, USA</p>
            </address>
          </div>
        </div>
        <div
          className={`slide ${activeIndex === 2 ? "slide-active" : ""}`}
          id="slide-2"
        >
          <div className="testimonial">
            <h5 className="quote-title">
              The last step to becoming a complete minimalist
            </h5>
            <p className="quote-text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              deserunt exercitationem deleniti.
            </p>
            <address className="quote-author">
              <img src={User2} alt="" className="author-photo" />
              <h6 className="author-name">Miyah Miles</h6>
              <p className="author-location">London, UK</p>
            </address>
          </div>
        </div>
        <div
          className={`slide ${activeIndex === 3 ? "slide-active" : ""}`}
          id="slide-3"
        >
          <div className="testimonial">
            <h5 className="quote-title">Finally free from old-school banks</h5>
            <p className="quote-text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </p>
            <address className="quote-author">
              <img src={User3} alt="" className="author-photo" />
              <h6 className="author-name">Francisco Gomes</h6>
              <p className="author-location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>
        <button className="slider-btn btn-left" onClick={LeftBtnHandler}>
          ←
        </button>
        <button className="slider-btn btn-right" onClick={RightBtnHandler}>
          →
        </button>
      </div>
      <div className="dots">
        <button
          className={`dot ${activeIndex === 1 ? "dot-active" : ""}`}
        ></button>
        <button
          className={`dot ${activeIndex === 2 ? "dot-active" : ""}`}
        ></button>
        <button
          className={`dot ${activeIndex === 3 ? "dot-active" : ""}`}
        ></button>
      </div>
    </section>
  );
};

export default Testimonials;
