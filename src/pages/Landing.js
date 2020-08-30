import React, { Component } from "react";
import "./Landing.scss";

import Navbar from "../components/Navbar/Navbar";
import Investing from "../components/Investing/Investing";
import Features from "../components/Features/Features";
import BuildInvesting from "../components/Investing/BuildInvesting";
import Marketing from "../components/Marketing/Marketing";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Vision from "../components/Vision/Vision";
import en from "../data/en/en.json";
import Sponsor from "../components/Sponsor-carusel/Sponsor";

class Landing extends Component {
  state = {
    en: en.english,
  };

  switchLanguageHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.english });
  };
  switchLanguage1Handler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.shqip });
  };
  switchLanguage2Handler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.german });
  };

  componentDidMount() {
    let num = window.localStorage.getItem("num");
    if (+num == 1) {
      this.setState({ en: en.english });
    } else if (+num == 2) {
      this.setState({ en: en.shqip });
    } else if (+num == 3) {
      this.setState({ en: en.german });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="switchLanguage">
          <div class="dropdown" style={{ float: "left" }}>
            <button class="dropbtn">Switch Language:</button>
            <div class="dropdown-content" style={{ float: "left" }}>
              <button
                className={
                  this.state.en.english
                    ? "switchLanguage active"
                    : "switchLanguage"
                }
                onClick={this.switchLanguageHandler}
              >
                {"English"}
              </button>
              <button
                className={
                  this.state.en.shqip
                    ? "switchLanguage active"
                    : "switchLanguage"
                }
                onClick={this.switchLanguage1Handler}
              >
                {"Shqip"}
              </button>
              <button
                className={
                  this.state.en.german
                    ? "switchLanguage active"
                    : "switchLanguage"
                }
                onClick={this.switchLanguage2Handler}
              >
                {"German"}
              </button>
            </div>
          </div>
        </div>
        <Navbar en={this.state.en} />
        <Investing en={this.state.en} />
        <Features en={this.state.en} />
        <BuildInvesting en={this.state.en} />
        <Marketing en={this.state.en} />
        <GetStarted en={this.state.en} />
        <Vision en={this.state.en} />
        <Sponsor en={this.state.en} />
        <Footer en={this.state.en} />
      </React.Fragment>
    );
  }
}

export default Landing;
