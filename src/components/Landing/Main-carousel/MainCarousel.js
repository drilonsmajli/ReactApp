import React, { Component } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../../assets/imageNav.png";
import img2 from "../../../assets/adam.png";
import img3 from "../../../assets/contactImg.png";
import { Parallax } from "react-parallax";

class MainCarousel extends Component {
  render() {
    return (
      <AliceCarousel autoPlay autoPlayInterval={4000}>
        <Parallax bgImage={img1} bgImageSizes={"cover"} strength={500}>
          <div style={{ height: "100vh" }}></div>
        </Parallax>
        <Parallax bgImage={img2} strength={200}>
          <div style={{ height: "100vh" }}></div>
        </Parallax>
        <Parallax bgImage={img3} strength={500}>
          <div style={{ height: "100vh" }}></div>
        </Parallax>
      </AliceCarousel>
    );
  }
}
export default MainCarousel;
