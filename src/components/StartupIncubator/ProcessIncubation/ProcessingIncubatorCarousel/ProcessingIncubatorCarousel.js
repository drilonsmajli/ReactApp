import React from "react";
import "./ProcessingIncubatorCarousel.scss";

import list from "../../../../assets/list.png";
import chart from "../../../../assets/chartt.png";
import rocket from "../../../../assets/rocket.png";
import meditation from "../../../../assets/meditation.png";
import img1 from "../../../../assets/Rectangle497.png";
import { Carousel } from "react-responsive-carousel";

function ProcessingIncubatorCarousel(props) {
  return (
    <div className="processingIncubatorCarousel">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="processingIncubatorCarousel__wrapper">
          <div className="post">
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
        </div>
        <div className="processingIncubatorCarousel__wrapper">
          <div className="post">
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
        </div>
        <div className="processingIncubatorCarousel__wrapper">
          <div className="post">
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
        </div>
        <div className="processingIncubatorCarousel__wrapper">
          <div className="post">
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
        </div>
      </Carousel>
    </div>
  );
}

export default ProcessingIncubatorCarousel;
