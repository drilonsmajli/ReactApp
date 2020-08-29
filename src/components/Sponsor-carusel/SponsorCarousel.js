import React, { Component } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./SponsorCarousel.scss";
import adidas from "../../assets/Adidas.png";
import intel from "../../assets/intel.png";
import sony from "../../assets/Sony.png";
import netsol from "../../assets/Netsol.png";
import autodesk from "../../assets/Autodesk.png";

class SponsorCarousel extends Component {
  render() {
    return (
      <AliceCarousel autoPlay autoPlayInterval="4000">
        <img src={intel} className="sliderimg" alt="img" />
        <img src={adidas} className="sliderimg" alt="img" />
        <img src={sony} className="sliderimg" alt="img" />
        <img src={netsol} className="sliderimg" alt="img" />
        <img src={autodesk} className="sliderimg" alt="img" />
      </AliceCarousel>
    );
  }
}
export default SponsorCarousel;
