import React, { useEffect } from "react";
import "./InvestToYourGoal.scss";
import Aos from "aos";

import img from "../../../../assets/layerservices.png";

function InvestToYourGoal(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="3000"
      className="InvestToYourGoal"
    >
      <div className="InvestToYourGoal__wrapper">
        <div className="InvestToYourGoal__img">
          <img src={img} alt="layer2" />
        </div>
        <div className="InvestToYourGoal__text">
          <h1>{props.en.investToYourGoal.title}</h1>
          <p>{props.en.investToYourGoal.content}</p>
        </div>
      </div>
    </div>
  );
}
export default InvestToYourGoal;
