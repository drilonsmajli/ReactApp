import React, { useEffect } from "react";
import "./WhyAreWePerfect.scss";
import Aos from "aos";

import img from "../../../assets/marvin1.png";

function WhyAreWePerfect(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="3000"
      className="WhyAreWePerfect"
    >
      <div className="content">
        <div className="text">
          <h1>{props.en.whyAreWePerfect.title}</h1>
          <p>{props.en.whyAreWePerfect.content}</p>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
}
export default WhyAreWePerfect;
