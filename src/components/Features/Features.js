import React from "react";
import "./Features.scss";

import rectangle from "../../assets/Rectangle.png";
import forbes from "../../assets/forbes.png";
import ibm from "../../assets/ibm.png";

import FeatureCarousel from "../FeatureCarousel/FratureCarousel";
function Features(props) {
  return (
    <div className="features">
      <div className="features__wrapper">
        <div className="features__image">
          <FeatureCarousel />
        </div>
        <div className="content">
          <h3>{props.en.features.title}</h3>
          <p>{props.en.features.content}</p>
        </div>
        <div className="products">
          <div className="products__wrapper">
            <div className="product__wrapper">
              <div className="product">
                <div className="products__content">
                  <p>Use smart newsfeed to make informed desicions</p>
                </div>
                <div className="product__info">
                  <div className="info">
                    <img src={rectangle} alt="rectangle" />
                    <div className="news">
                      <div className="icon">
                        <img
                          src={forbes}
                          alt="forbes"
                          style={{ width: "20px", borderRadius: "25px" }}
                        />
                      </div>
                      <div className="title">
                        <p>Forbes Today at 1.00pm</p>
                      </div>
                    </div>
                    <div className="titlenews">
                      IBM raises the bar for storage again
                    </div>
                    <div className="shownews">
                      <img src={ibm} alt="ibm" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <img
                  src={rectangle}
                  alt="rectangle"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="product__wrapper">
              <div className="product">
                <div className="products__content">
                  <p>Use smart newsfeed to make informed desicions</p>
                </div>
                <div className="product__info">
                  <div className="info">
                    <img
                      src={rectangle}
                      alt="rectangle"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="news">
                      <div className="icon">
                        <img
                          src={forbes}
                          alt="forbes"
                          style={{ width: "20px", borderRadius: "25px" }}
                        />
                      </div>
                      <div className="title">
                        <p>Forbes Today at 1.00pm</p>
                      </div>
                    </div>
                    <div className="titlenews">
                      IBM raises the bar for storage again
                    </div>
                    <div className="shownews">
                      <img src={ibm} alt="ibm" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <img
                  src={rectangle}
                  alt="rectangle"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="product__wrapper">
              <div className="product">
                <div className="products__content">
                  <p>Use smart newsfeed to make informed desicions</p>
                </div>
                <div className="product__info">
                  <div className="info">
                    <img
                      src={rectangle}
                      alt="rectangle"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="news">
                      <div className="icon">
                        <img
                          src={forbes}
                          alt="forbes"
                          style={{ width: "20px", borderRadius: "25px" }}
                        />
                      </div>
                      <div className="title">
                        <p>Forbes Today at 1.00pm</p>
                      </div>
                    </div>
                    <div className="titlenews">
                      IBM raises the bar for storage again
                    </div>
                    <div className="shownews">
                      <img src={ibm} alt="ibm" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <img
                  src={rectangle}
                  alt="rectangle"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
