import React from "react";
import "./InvestingCarousel.scss";
import { Carousel } from "react-responsive-carousel";

import coal from "../../../../assets/coal.png";
import crude from "../../../../assets/Crude.png";
import wti from "../../../../assets/WTI.png";
import miners from "../../../../assets/Miners.png";
import wave from "../../../../assets/wave.png";
import liquid from "../../../../assets/liquid.png";
import gold from "../../../../assets/gold.png";
import coalicon from "../../../../assets/coalicon.png";
import chart from "../../../../assets/chart.png";

function InvestingCarousel() {
  return (
    <div className="carousel">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="carousel__wrapper">
          <div className="image__investitor">
            <img src={wti} alt="wti" style={{ width: "100%", height: "50%" }} />
            <div className="investitor__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={liquid} alt="liquid" style={{ width: "70%" }} />
                </div>
                <div className="chart">
                  <h5>Crude Oil WTI</h5>
                  <p>$41.33</p>
                  <img
                    alt=""
                    src={chart}
                    style={{ width: "20%", top: "20px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__wrapper">
          <div className="image__investitor">
            <img
              src={miners}
              alt="miners"
              style={{ width: "100%", height: "50%" }}
            />
            <div className="investitor__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img
                    src={coalicon}
                    alt="coailicon"
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="chart"
                  style={{ height: "20px", fontSize: "12px" }}
                >
                  <div style={{ height: "80px" }}>
                    <h5>Daily Junior Silver Miners Index</h5>
                    <p>$24.00</p>
                  </div>
                  <img
                    alt=""
                    src={chart}
                    style={{ width: "20%", top: "25px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__wrapper">
          <div className="image__investitor">
            <img
              src={coal}
              alt="coal"
              style={{ width: "100%", height: "50%" }}
            />
            <div className="investitor__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={gold} alt="gold" style={{ width: "100%" }} />
                </div>
                <div className="chart">
                  <h5>Coal</h5>
                  <p>$24.00</p>
                  <img
                    alt=""
                    src={chart}
                    style={{ width: "20%", top: "20px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__wrapper">
          <div className="image__investitor">
            <img
              src={crude}
              alt="crude"
              style={{ width: "100%", height: "50%" }}
            />
            <div className="investitor__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={liquid} alt="liquid" style={{ width: "70%" }} />
                </div>
                <div className="chart">
                  <h5>Crude Oil Brent</h5>
                  <p>$44.00</p>
                  <img
                    alt=""
                    src={chart}
                    style={{ width: "20%", top: "20px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default InvestingCarousel;
