import React, { useEffect } from "react";
import "./Investing.scss";
import Aos from "aos";

import InvestingCarousel from "./InvestingCarousel/InvestingCarousel";
import { withRouter } from "react-router-dom";
import coal from "../../../assets/coal.png";
import crude from "../../../assets/Crude.png";
import wti from "../../../assets/WTI.png";
import miners from "../../../assets/Miners.png";
import wave from "../../../assets/wave.png";
import liquid from "../../../assets/liquid.png";
import gold from "../../../assets/gold.png";
import coalicon from "../../../assets/coalicon.png";
import chart from "../../../assets/chart.png";

import "aos/dist/aos.css";

function Investing(props) {
  useEffect(() => {
    Aos.init();
  }, []);
  const investing = (
    <div data-aos="zoom-in" data-aos-duration="1500" className="ivesting">
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
                <img alt="" src={chart} style={{ width: "20%", top: "20px" }} />
              </div>
            </div>
          </div>
        </div>
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
                <img alt="" src={chart} style={{ width: "20%", top: "20px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="image__investitor">
          <img src={coal} alt="coal" style={{ width: "100%", height: "50%" }} />
          <div className="investitor__offer">
            <div className="wave">
              <img src={wave} alt="wave" style={{ width: "100%" }} />
              <div className="icons">
                <img src={gold} alt="gold" style={{ width: "100%" }} />
              </div>
              <div className="chart">
                <h5>Coal</h5>
                <p>$24.00</p>
                <img alt="" src={chart} style={{ width: "20%", top: "20px" }} />
              </div>
            </div>
          </div>
        </div>
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
                <img src={coalicon} alt="coailicon" style={{ width: "100%" }} />
              </div>
              <div
                className="chart"
                style={{ height: "20px", fontSize: "12px" }}
              >
                <div style={{ height: "80px" }}>
                  <h5>Daily Junior Silver Miners Index</h5>
                  <p>$24.00</p>
                </div>
                <img alt="" src={chart} style={{ width: "20%", top: "25px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="investing">
      <div className="child">
        <div data-aos="fade-left" className="wrapper__title">
          <h3>{props.en.invest.title}</h3>
          <p>{props.en.invest.content}</p>
        </div>
        {window.matchMedia("(max-width: 1024px)").matches ? (
          <InvestingCarousel />
        ) : (
          investing
        )}
      </div>
    </div>
  );
}
export default withRouter(Investing);
