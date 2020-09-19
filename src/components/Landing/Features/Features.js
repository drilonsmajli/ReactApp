import React, { useEffect } from "react";
import "./Features.scss";
import Aos from "aos";

import { Parallax } from "react-parallax";

import FeatureCarousel from "../FeatureCarousel/FratureCarousel";
import rectangle from "../../../assets/Rectangle.png";
import forbes from "../../../assets/forbes.png";
import ibm from "../../../assets/ibm.png";
import cnl from "../../../assets/cnl.png";
import amazon from "../../../assets/amazon.png";
import netflix from "../../../assets/netflix.png";
import chart from "../../../assets/chart.png";
import upArrow from "../../../assets/up-arrow.png";
import menu from "../../../assets/menu.png";
import valerina from "../../../assets/valerina.png";
import josh from "../../../assets/josh.png";
import cristina from "../../../assets/cristina.png";
import clem from "../../../assets/clem.png";

function Features(props) {
  useEffect(() => {
    Aos.init();
  });
  const features = (
    <div data-aos="zoom-in" data-aos-duration="1500" className="products">
      <div className="product__wrapper">
        <div className="product">
          <div className="product__info">
            <img src={rectangle} alt="rectangle" />
            <div className="products__content">
              <p>Use smart newsfeed to make informed desicions</p>
            </div>
            <div className="icon">
              <img src={forbes} alt="forbes" />
              <h5>Forbes</h5>
              <p>Today at 1.00pm</p>
            </div>

            <div className="titlenews">
              <p>IBM raises the bar for storage again</p>
              <div className="shownews">
                <img src={ibm} alt="ibm" />
              </div>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "lightblue",
                  width: "100%",
                  height: "0",
                }}
              />
              <div className="cln">
                <div className="cnl__icon">
                  <img src={cnl} alt="forbes" />
                  <h5>CNL</h5>
                  <p>Today at 1.00pm</p>
                </div>
                <div className="photos">
                  <div className="amazon__photo">
                    <img src={amazon} alt="forbes" />
                    <div className="netflix__photo">
                      <img src={netflix} alt="forbes" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cnl__content">
                <p>
                  The daily dose Europe: France to impose digital tax in
                  January; EU tax rule to hit Netflix and Amazon
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product__info">
            <img src={rectangle} alt="rectangle" />
            <div className="products__content">
              <p>Invest wisely with a variety of indicators</p>
            </div>
            <div className="row">
              <div className="row__icon">
                <img src={menu} alt="menu" />
                <h6>Belkhayte Timing</h6>
                <i className="fa fa-exclamation-circle"></i>
              </div>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "lightblue",
                  width: "90%",
                  height: "0",
                }}
              />
              <div className="row__icon">
                <img src={chart} alt="chart.png" />
                <h6>Ichimoku Cloud</h6>
                <i className="fa fa-exclamation-circle"></i>
              </div>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "lightblue",
                  width: "90%",
                  height: "0",
                }}
              />
              <div className="row__icon">
                <img src={upArrow} alt="chart.png" />
                <h6>Bolinger Bands</h6>
                <p>
                  Bolinger bands belongs to the category of trend
                  indicators.They reflect the dynamic range of the price
                  movement.With their help many traders determine the relative
                  position of the price within selected time interval.
                </p>
                <i className="fa fa-exclamation-circle"></i>
              </div>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "lightblue",
                  width: "90%",
                  height: "0",
                  marginTop: "15%",
                }}
              />
              <div className="row__icon">
                <img src={chart} alt="chart.png" />
                <h6>Momentum</h6>
                <i className="fa fa-exclamation-circle"></i>
              </div>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "lightblue",
                  width: "90%",
                  height: "0",
                }}
              />
              <div className="row__icon">
                <img src={chart} alt="chart.png" />
                <h6>MA</h6>
                <i className="fa fa-exclamation-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product__info">
            <img src={rectangle} alt="rectangle" />
            <div className="products__content">
              <p>Harnnes the power of a supportive community</p>
              <div className="chat__row">
                <div className="chat">
                  <div className="chat__img">
                    <img src={josh} alt="valerina.png" />
                  </div>
                  <div className="chat__content">
                    <h6>Evan.P</h6>
                    <p>What stock shoul I invest in?</p>
                  </div>
                </div>
              </div>
              <div className="chat__row">
                <div className="chat">
                  <div className="chat__img">
                    <img src={clem} alt="valerina.png" />
                  </div>
                  <div className="chat__content">
                    <h6>Charles.J</h6>
                    <p>If I were you I would consider the banking section.</p>
                  </div>
                </div>
              </div>
              <div className="chat__row">
                <div className="chat">
                  <div className="chat__img">
                    <img src={valerina} alt="valerina.png" />
                  </div>
                  <div className="chat__content">
                    <h6>Anna.W</h6>
                    <p>I have my eye on Amazon!</p>
                  </div>
                </div>
              </div>
              <div className="chat__row">
                <div className="chat">
                  <div className="chat__img">
                    <img src={cristina} alt="valerina.png" />
                  </div>
                  <div className="chat__content">
                    <h6>Monica.G</h6>
                    <p>Monica.G</p>
                  </div>
                </div>
              </div>
              <div className="chat__message">
                <hr />
                <p>Type a message...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="features">
      <div className="features__wrapper">
        <div className="features__image"></div>
        <div className="content">
          <div className="title__content">
            <h3>{props.en.features.title}</h3>
            <p>{props.en.features.content}</p>
          </div>
        </div>

        {window.matchMedia("(max-width: 1024px)").matches ? (
          <FeatureCarousel />
        ) : (
          features
        )}
      </div>
    </div>
  );
}

export default Features;
