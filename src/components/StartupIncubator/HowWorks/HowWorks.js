import React, { useEffect } from "react";
import "./HowWorks.scss";
import Aos from "aos";

import img from "../../../assets/adeolu.png";

function HowWorks(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="3000" className="howworks">
      <div className="content">
        <div className="text">
          <h1>{props.en.howWorks.title}</h1>
          <p>{props.en.howWorks.content}</p>
        </div>
        <div className="img">
          <img src={img} alt="slidebean.png" />
        </div>
      </div>
    </div>
  );
}
export default HowWorks;
