import React, { useEffect } from "react";
import "./Incubation.scss";
import Aos from "aos";

import img from "../../../assets/slidebean.png";
function Incubation(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-right" data-aos-duration="3000" className="incubation">
      <div className="content">
        <div className="text">
          <h1>{props.en.incubation.title}</h1>
          <p>{props.en.incubation.content}</p>
        </div>
        <div className="img">
          <img src={img} alt="slidebean.png" />
        </div>
      </div>
    </div>
  );
}
export default Incubation;
