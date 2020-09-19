import React from "react";
import "./StartupIncubatorCarousel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img from "../../../assets/left-quotes.png";
import img2 from "../../../assets/josh_client.png";

function StartupIncubatorCarousel(props) {
  return (
    <div className="startupIncubatorCarousel">
      <div className="img">
        <div className="startupincubator__slider">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className="slider__wrapper">
              <div className="slider__img">
                <img src={img} alt="left quotes" />
              </div>
              <div className="slider__content">
                <h4>{props.en.incubatorcarousel.post1.title}</h4>
                <p>{props.en.incubatorcarousel.post1.content}</p>
              </div>
              <div className="slider__author">
                <p>{props.en.incubatorcarousel.post1.author}</p>
                <img src={img2} alt="josh" />
              </div>
            </div>
            <div className="slider__wrapper">
              <div className="slider__img">
                <img src={img} alt="left quotes" />
              </div>
              <div className="slider__content">
                <h4>{props.en.incubatorcarousel.post1.title}</h4>
                <p>{props.en.incubatorcarousel.post1.content}</p>
              </div>
              <div className="slider__author">
                <p>{props.en.incubatorcarousel.post1.author}</p>
                <img src={img2} alt="josh" />
              </div>
            </div>
          </Carousel>
        </div>
        <div className="startupInvubator__about">
          <div className="about__wrapper">
            <div className="about__title">
              <h3>{props.en.incubatorcarousel.post2.title}</h3>
            </div>
            <div className="about__content">
              <p>{props.en.incubatorcarousel.post2.content}</p>
            </div>
            <div className="about__button">
              <button>{props.en.incubatorcarousel.post2.button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StartupIncubatorCarousel;
