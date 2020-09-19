import React, { useEffect } from "react";
import "./Services.scss";
import Aos from "aos";

import img from "../../../assets/annie-spratt.png";

function Services(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="StartupAcceleration__Services"
    >
      <div className="content">
        <div className="text">
          <h1>{props.en.services.title}</h1>
          <p>{props.en.services.content1}</p>
          <p>
            {props.en.services.content2}
            <br></br>
            {props.en.services.content3}
            <br></br>
            {props.en.services.content4}
            <br></br>
            {props.en.services.content5}
            <br></br>
            {props.en.services.content6}
            <br></br>
            {props.en.services.content7}
            <br></br>
            {props.en.services.content8}
          </p>
        </div>
        <div className="img">
          <img src={img} alt="slidebean.png" />
          <div className="img__button">
            <button>{props.en.services.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
