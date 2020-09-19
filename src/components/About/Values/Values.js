import React, { useEffect } from "react";
import "./Values.scss";
import Aos from "aos";

import img from "../../../assets/carl1.png";

function Values(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="container Values"
    >
      <div className="row">
        <div className="col-lg-8 content">
          <div className="text">
            <h1>{props.en.values.title}</h1>
            <p>{props.en.values.content}</p>
          </div>
          <div className="col-lg-5 img">
            <div className="img">
              <img src={img} alt="slidebean.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Values;
