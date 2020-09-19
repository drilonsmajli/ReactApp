import React, { useEffect } from "react";
import "./GetStarted.scss";
import Aos from "aos";

import image1 from "../../../assets/Image1.png";
import image2 from "../../../assets/Image2.png";
import image3 from "../../../assets/Image3.png";
import user from "../../../assets/user.png";
import deposit from "../../../assets/deposit.png";
import rectangle from "../../../assets/Rectangle.png";

function GetStarted(props) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="getstarted">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="getstarted__wrapper"
      >
        <div className="title">
          <h3>{props.en.getstarted.title}</h3>
        </div>
        <div className="posts">
          <div className="num1">1</div>
          <div className="num2">2</div>
          <div className="num3">3</div>
          <div className="post">
            <div className="connect">
              <i className="fa fa-chevron-right"></i>
            </div>
            <div className="post__images">
              <img src={image1} alt="image1" />
              <img src={rectangle} alt="rectangle" />
            </div>
            <div className="post__content">
              <i className="fa fa-circle"></i>
              <h3>{props.en.getstarted.post1_title}</h3>
              <p>{props.en.getstarted.post1_content}</p>
              <div className="icon">
                <img src={user} alt="user" />
              </div>
            </div>
          </div>

          <div className="post">
            <div className="connect">
              <i className="fa fa-chevron-right"></i>
            </div>
            <div className="post__images">
              <img src={image2} alt="image1" />
              <img src={rectangle} alt="rectangle" />
            </div>
            <div className="post__content">
              <i className="fa fa-circle"></i>
              <h3>{props.en.getstarted.post2_title}</h3>
              <p>{props.en.getstarted.post2_content}</p>
              <div className="icon">
                <i className="fa fa-street-view location"></i>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post__images">
              <img src={image3} alt="image1" />
              <img src={rectangle} alt="rectangle" />
            </div>
            <div className="post__content">
              <i className="fa fa-circle"></i>
              <h3>{props.en.getstarted.post3_title}</h3>
              <p>{props.en.getstarted.post3_content}</p>
              <div className="icon">
                <img src={deposit} alt="deposit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GetStarted;
