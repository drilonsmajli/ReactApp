import React, { Component } from "react";

import "./FeatureCarousel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../assets/feature.png";

class FeatureCarousel extends Component {
  render() {
    return (
      <AliceCarousel >
        <img
          src={img1}
          style={{ width: "100%", height: "811px" }}
          className="sliderimg"
          alt="img"
        />
        <img
          src={img1}
          style={{ width: "100%", height: "811px" }}
          className="sliderimg"
          alt="img"
        />
        <img
          src={img1}
          style={{ width: "100%", height: "811px" }}
          className="sliderimg"
          alt="img"
        />
      </AliceCarousel>
    );
  }
}
export default FeatureCarousel;
