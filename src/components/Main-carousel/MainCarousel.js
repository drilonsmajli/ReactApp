import React, { Component } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../assets/imageNav.png";

class MainCarousel extends Component {
  render() {
    return (
      <AliceCarousel autoPlay autoPlayInterval="4000">
        <img
          src={img1}
          style={{ width: "100%", height: "100vh" }}
          className="sliderimg"
          alt="img"
        />
        <img
          src={img1}
          style={{ width: "100%", height: "100vh" }}
          className="sliderimg"
          alt="img"
        />
        <img
          src={img1}
          style={{ width: "100%", height: "100vh" }}
          className="sliderimg"
          alt="img"
        />
      </AliceCarousel>
    );
  }
}
export default MainCarousel;
