import React, { useEffect } from "react";
import "./WhyUsProcessInvesting.scss";
import Aos from "aos";

import img1 from "../../../assets/image26.png";
import img2 from "../../../assets/business.svg";
import img3 from "../../../assets/image27.png";
import img4 from "../../../assets/image28.png";
import img7 from "../../../assets/image29.png";
import img5 from "../../../assets/meditation.png";
import img6 from "../../../assets/investment.svg";
import img8 from "../../../assets/group.svg";
import WhyUsProcessInvestingCarousel from "./WhyUsProcessInvestingCarousel/WhyUsProcessInvestingCarousel";

function WhyUsProcessInvesting(props) {
  useEffect(() => {
    Aos.init();
  });
  const whyUsProcessInvesting = (
    <React.Fragment>
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
    </React.Fragment>
  );
  return (
    <div className="WhyUsProcessInvesting">
      <div
        data-aos="zoom-in-left"
        data-aos-duration="3000"
        className="WhyUsProcessInvesting__wrapper"
      >
        {window.matchMedia("(max-width: 1024px)").matches ? (
          <WhyUsProcessInvestingCarousel en={props.en} />
        ) : (
          whyUsProcessInvesting
        )}
      </div>
    </div>
  );
}
export default WhyUsProcessInvesting;
