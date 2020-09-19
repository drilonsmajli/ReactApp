import React from "react";
import "./LoginCarousel.scss";
import { Carousel } from "react-responsive-carousel";

import img from "../../assets/signin.png";

function LoginCarousel(props) {
  return (
    <div className="login__box">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="carousel__wrapper">
          <img src={img} alt="signin" />
          <p>{props.en.form.carousel}</p>
        </div>
        <div className="carousel__wrapper">
          <img src={img} alt="signin" />
          <p>{props.en.form.carousel}</p>
        </div>
      </Carousel>
    </div>
  );
}
export default LoginCarousel;
