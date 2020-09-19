import React, { useEffect } from "react";
import "./IncubationServices.scss";
import Aos from "aos";

import img from "../../../assets/nastuh.png";

function IncubationServices(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="3000"
      className="incubationServices"
    >
      <div className="content">
        <div className="text">
          <h1>{props.en.incubationService.title}</h1>
          <p>{props.en.incubationService.p1}</p>
          <p>{props.en.incubationService.p2}</p>
          <p>{props.en.incubationService.p3}</p>
          <p>{props.en.incubationService.p4}</p>
          <p>{props.en.incubationService.p5}</p>
          <p>{props.en.incubationService.p6}</p>
          <p>{props.en.incubationService.p7}</p>
          <p>{props.en.incubationService.p8}</p>
          <p>{props.en.incubationService.p9}</p>
          <p>{props.en.incubationService.p10}</p>
          <p>{props.en.incubationService.p11}</p>
          <p>{props.en.incubationService.p12}</p>
          <p>{props.en.incubationService.p13}</p>
        </div>
        <div className="img">
          <img src={img} alt="slidebean.png" />
        </div>
      </div>
    </div>
  );
}
export default IncubationServices;
