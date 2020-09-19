import React from "react";
import "./SignUpCarousel.scss";
import { Carousel } from "react-responsive-carousel";

import img from "../../assets/Layer2.png";

function SignUpCarousel(props) {
  return (
    <div className="box">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="signupcarousel__wrapper">
          <img src={img} alt="signup" />
          <p>{props.en.form.carousel}</p>
        </div>
        <div className="signupcarousel__wrapper">
          <img src={img} alt="signup" />
          <p>{props.en.form.carousel}</p>
        </div>
      </Carousel>
    </div>
  );
}
export default SignUpCarousel;
