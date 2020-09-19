import React, { useEffect } from "react";
import "./InvestProcess.scss";
import Aos from "aos";

import img from "../../../../assets/layerservices.png";

function InvestProcess(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="InvestProcess"
    >
      <div className="InvestProcess__wrapper">
        <div className="InvestProcess__text">
          <h1>{props.en.investProcess.title}</h1>
          <p>{props.en.investProcess.content}</p>
        </div>
        <div className="InvestProcess__img">
          <img src={img} alt="layer2" />
        </div>
      </div>
    </div>
  );
}
export default InvestProcess;
