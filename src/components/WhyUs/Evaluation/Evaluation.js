import React, { useEffect } from "react";
import "./Evaluation.scss";
import Aos from "aos";

import img from "../../../assets/annie-spratt.png";

function Evaluation(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-right" data-aos-duration="3000" className="Evaluation">
      <div className="content">
        <div className="text">
          <h1>{props.en.Evaluation.title}</h1>
          <p>{props.en.Evaluation.content}</p>
          <div className="text__button">
            <button>{props.en.Evaluation.button}</button>
          </div>
        </div>
        <div className="img">
          <img src={img} alt="slidebean.png" />
        </div>
      </div>
    </div>
  );
}
export default Evaluation;
