import React, { useEffect } from "react";
import "./Process.scss";
import Aos from "aos";

import email from "../../../assets/email.png";
import videoCall from "../../../assets/video-call.png";
import meeting from "../../../assets/meeting.png";
import diagram from "../../../assets/diagram.png";

function Process(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="Process">
      <div className="process__wrapper">
        <div className="connect__wrapper">
          <div className="num1">
            <h1>1</h1>
          </div>

          <div className="connect">
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="num2">
            <h1>2</h1>
          </div>

          <div className="connect">
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="num3">
            <h1>3</h1>
          </div>

          <div className="connect">
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="num4">
            <h1>4</h1>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="post__wrapper"
        >
          <div className="post">
            <div className="post__point">
              <i className="fa fa-circle"></i>
            </div>
            <div className="post__content">
              <h4>{props.en.process.post1.title}</h4>
            </div>
            <div className="post__img">
              <img src={email} alt="email" />
            </div>
          </div>
          <div className="post">
            <div className="post__point">
              <i className="fa fa-circle"></i>
            </div>
            <div className="post__content">
              <h4>{props.en.process.post2.title}</h4>
            </div>
            <div className="post__img">
              <img src={videoCall} alt="email" />
            </div>
          </div>
          <div className="post">
            <div className="post__point">
              <i className="fa fa-circle"></i>
            </div>
            <div className="post__content">
              <h4>{props.en.process.post3.title}</h4>
            </div>
            <div className="post__img">
              <img src={diagram} alt="email" />
            </div>
          </div>
          <div className="post">
            <div className="post__point">
              <i className="fa fa-circle"></i>
            </div>
            <div className="post__content">
              <h4>{props.en.process.post4.title}</h4>
            </div>
            <div className="post__img">
              <img src={meeting} alt="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Process;
