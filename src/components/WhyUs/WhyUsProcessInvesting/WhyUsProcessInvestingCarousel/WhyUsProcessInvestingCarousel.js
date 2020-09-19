import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./WhyUsProcessInvestingCarousel.scss";

import img1 from "../../../../assets/image26.png";
import img2 from "../../../../assets/business.svg";
import img3 from "../../../../assets/image27.png";
import img4 from "../../../../assets/image28.png";
import img7 from "../../../../assets/image29.png";
import img5 from "../../../../assets/meditation.png";
import img6 from "../../../../assets/investment.svg";
import img8 from "../../../../assets/group.svg";

function WhyUsProcessInvestingCarousel(props) {
  return (
    <div className="WhyUsProcessInvestingCarousel">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="WhyUsProcessInvestingCarousel__wrapper">
          <div className="post">
            <div className="post__img">
              <img src={img1} alt="img17" />
              <div className="post__content">
                <h3>{props.en.whyUsProcessInvestment.post1.title}</h3>
                <p>{props.en.whyUsProcessInvestment.post1.content}</p>
                <div className="post__icon">
                  <img src={img2} alt="business" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhyUsProcessInvestingCarousel__wrapper">
          <div className="post">
            <div className="post__img">
              <img src={img3} alt="img17" />
              <div className="post__content">
                <h3>{props.en.whyUsProcessInvestment.post2.title}</h3>
                <p>{props.en.whyUsProcessInvestment.post2.content}</p>
                <div className="post__icon">
                  <img src={img6} alt="business" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhyUsProcessInvestingCarousel__wrapper">
          <div className="post">
            <div className="post__img">
              <img src={img4} alt="img17" />
              <div className="post__content">
                <h3>{props.en.whyUsProcessInvestment.post3.title}</h3>
                <p>{props.en.whyUsProcessInvestment.post3.content}</p>
                <div className="post__icon">
                  <img src={img8} alt="business" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhyUsProcessInvestingCarousel__wrapper">
          <div className="post">
            <div className="post__img">
              <img src={img7} alt="img17" />
              <div className="post__content">
                <h3>{props.en.whyUsProcessInvestment.post4.title}</h3>
                <p>{props.en.whyUsProcessInvestment.post4.content}</p>
                <div className="post__icon">
                  <img src={img5} alt="business" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default WhyUsProcessInvestingCarousel;
