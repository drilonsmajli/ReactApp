import React, { useEffect } from "react";
import "./Mission.scss";
import Aos from "aos";

import img from "../../../assets/ian1.png";

function Mission(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="3000"
      className="container Mission"
    >
      <div className="row">
        <div className="col-lg-8 content">
          <div className="text">
            {console.log(props)}
            <h1>{props.en.mission.title}</h1>
            <p>{props.en.mission.content}</p>
          </div>
          <div className="col-lg-5 img">
            <img src={img} alt="marvin1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mission;
