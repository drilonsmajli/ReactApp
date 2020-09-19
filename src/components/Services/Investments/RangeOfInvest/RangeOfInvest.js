import React, { useEffect } from "react";
import "./RangeOfInvest.scss";
import Aos from "aos";

import img from "../../../../assets/layerservices.png";

function RangeOfInvest(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="RangeOfInvest"
    >
      <div className="RangeOfInvest__wrapper">
        <div className="RangeOfInvest__text">
          <h1>{props.en.rangeOfInvest.title}</h1>
          <p>{props.en.rangeOfInvest.content}</p>
        </div>
        <div className="RangeOfInvest__img">
          <img src={img} alt="layer2" />
        </div>
      </div>
    </div>
  );
}
export default RangeOfInvest;
