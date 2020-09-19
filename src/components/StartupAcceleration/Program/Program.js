import React, { useEffect } from "react";
import "./Program.scss";
import Aos from "aos";

import img from "../../../assets/marvin1.png";

function Program(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="3000" className="Program">
      <div className="content">
        <div className="text">
          <h1>{props.en.program.title}</h1>
          <p>{props.en.program.content}</p>
          <div className="program__button">
            <button className="see-details">{props.en.program.button1}</button>
            <button className="apply-now">{props.en.program.button2}</button>
          </div>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
}
export default Program;
