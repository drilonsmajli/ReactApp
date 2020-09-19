import React, { Component } from "react";
import Aos from "aos";

import "react-alice-carousel/lib/alice-carousel.css";
import "./SponsorCarousel.scss";
import buildkos from "../../../assets/buildkos.png";
import adshqip from "../../../assets/adshqip.png";
import venturekos from "../../../assets/venturekos.png";
import logomediakos from "../../../assets/logomediakos.png";
import { Carousel } from "react-responsive-carousel";

class SponsorCarousel extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <div data-aos="zoom-in" data-aos-duration="3000" className="carousel">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div className="sponsor__wrapper">
            <div className="sponsor__image">
              <img src={buildkos} className="sliderimg" alt="img" />
            </div>
          </div>
          <div className="sponsor__wrapper">
            <div className="sponsor__image">
              <img src={venturekos} className="sliderimg" alt="img" />
            </div>
          </div>
          <div className="sponsor__wrapper">
            <div className="sponsor__image">
              <img src={adshqip} className="sliderimg" alt="img" />
            </div>
          </div>
          <div className="sponsor__wrapper">
            <div className="sponsor__image">
              <img src={logomediakos} className="mediakos" alt="img" />
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default SponsorCarousel;
