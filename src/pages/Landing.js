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
import SponsorCarousel from "../components/Sponsor-carusel/SponsorCarousel";
import Sponsor from "../components/Sponsor-carusel/Sponsor";

class Landing extends Component {
  state = {
    en: en.english,
  };

  switchLanguageHandler = () => {
    let num = window.localStorage.getItem("num");
    console.log(num);

    window.localStorage.setItem("num", +num + 1);
    if (+num == 1) {
      this.setState({ en: en.english });
      // window.localStorage.setItem("num", +num + 1);
    } else if (+num == 2) {
      this.setState({ en: en.shqip });
      // window.localStorage.setItem("num", +num + 1);
    } else if (+num == 3) {
      this.setState({ en: en.german });
    }

    if (num >= 3) {
      window.localStorage.setItem("num", 1);
    }
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
          Switch Language:
          <button
            className="switchLanguage"
            onClick={this.switchLanguageHandler}
          >
            {this.state.en.Language}
          </button>
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
