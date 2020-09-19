import React, { useEffect } from "react";
import "./WhoAreWe.scss";
import Aos from "aos";

import img from "../../../assets/marvin1.png";

function WhoAreWe(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="3000"
      className="container WhoAreWe"
    >
      <div className="row">
        <div className="col-lg-8 content">
          <div className="text">
            <h1>{props.en.whoarewe.title}</h1>
            <p>{props.en.whoarewe.content}</p>
          </div>
          <div className="col-lg-5 img">
            <img src={img} alt="marvin1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhoAreWe;
