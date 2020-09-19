import React, { useEffect } from "react";
import "./ProcessIncubation.scss";
import Aos from "aos";

import list from "../../../assets/list.png";
import chart from "../../../assets/chartt.png";
import rocket from "../../../assets/rocket.png";
import meditation from "../../../assets/meditation.png";
import img1 from "../../../assets/Rectangle497.png";
import ProcessingIncubatorCarousel from "./ProcessingIncubatorCarousel/ProcessingIncubatorCarousel";

function ProcessIncubation(props) {
  useEffect(() => {
    Aos.init();
  });
  const processIncubation = (
    <React.Fragment>
      <div data-aos="zoom-in" data-aos-duration="3000" className="post">
        <div className="connect">
          <i className="fa fa-chevron-right"></i>
        </div>
        <div className="num">
          <h1>1</h1>
        </div>
        <div className="img">
          <img src={img1} alt="aasd" />
          <div className="post__content">
            <i className="fa fa-circle"></i>
            <h1>{props.en.processincubation.post1.title}</h1>
            <p>{props.en.processincubation.post1.content}</p>
            <div className="post__img">
              <img src={list} alt="list.png" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" className="post">
        <div className="connect">
          <i className="fa fa-chevron-right"></i>
        </div>
        <div className="num">
          <h1>2</h1>
        </div>
        <div className="img">
          <img src={img1} alt="aasd" />
          <div className="post__content">
            <i className="fa fa-circle"></i>
            <h1>{props.en.processincubation.post2.title}</h1>
            <p>{props.en.processincubation.post2.content}</p>
            <div className="post__img">
              <img src={meditation} alt="list.png" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" className="post">
        <div className="connect">
          <i className="fa fa-chevron-right"></i>
        </div>
        <div className="num">
          <h1>3</h1>
        </div>
        <div className="img">
          <img src={img1} alt="aasd" />
          <div className="post__content">
            <i className="fa fa-circle"></i>
            <h1>{props.en.processincubation.post3.title}</h1>
            <p>{props.en.processincubation.post3.content}</p>
            <div className="post__img">
              <img src={chart} alt="list.png" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" className="post">
        <div className="num">
          <h1>4</h1>
        </div>
        <div className="img">
          <img src={img1} alt="aasd" />
          <div className="post__content">
            <i className="fa fa-circle"></i>
            <h1>{props.en.processincubation.post4.title}</h1>
            <p>{props.en.processincubation.post4.content}</p>
            <div className="post__img">
              <img src={rocket} alt="list.png" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  return (
    <div className="processIncubation">
      <div className="processIncubation__wrapper">
        {window.matchMedia("(max-width: 1024px)").matches ? (
          <ProcessingIncubatorCarousel en={props.en} />
        ) : (
          processIncubation
        )}
      </div>
    </div>
  );
}
export default ProcessIncubation;
