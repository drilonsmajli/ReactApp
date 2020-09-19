import React, { useEffect } from "react";
import "./Marketing.scss";

import Aos from "aos";

import leftQuotes from "../../../assets/left-quotes.png";

function Marketing(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="marketing">
      <div className="marketing__wrapper">
        <div className="title">
          <h1>{props.en.marketing.title}</h1>
          <p>{props.en.marketing.content}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="client__feedback"
        >
          <div className="img__feedback">
            <div className="feedback">
              <img src={leftQuotes} alt="leftquotes" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <p>Evan.P</p>
              </div>
            </div>
            <div className="feedback">
              <img src={leftQuotes} alt="leftquotes" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <p>Charles.J</p>
              </div>
            </div>
            <div className="feedback">
              <img src={leftQuotes} alt="leftquotes" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <p>Anna.w</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
