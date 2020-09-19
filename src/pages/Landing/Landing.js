import React, { Component } from "react";
import "./Landing.scss";

import en from "../../data/en/en.json";
import Navbar from "../../components/Landing/Navbar/Navbar";
import Investing from "../../components/Landing/Investing/Investing";
import BuildInvesting from "../../components/Landing/Investing/BuildInvesting";
import Marketing from "../../components/Landing/Marketing/Marketing";
import GetStarted from "../../components/Landing/GetStarted/GetStarted";
import Sponsor from "../../components/Landing/Sponsor-carusel/Sponsor";
import Features from "../../components/Landing/Features/Features";
import Vision from "../../components/Landing/Vision/Vision";
import Footer from "../../components/Toolbar/Footer/Footer";

class Landing extends Component {
  state = {
    en: en.Landing.english,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.Landing.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.Landing.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.Landing.shqip });
  };

  componentDidMount() {
    let num = window.localStorage.getItem("num");
    if (+num == 1) {
      this.setState({ en: en.Landing.english });
    } else if (+num == 2) {
      this.setState({ en: en.Landing.german });
    } else if (+num == 3) {
      this.setState({ en: en.Landing.shqip });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar en={this.state.en} />
        <Investing en={this.state.en} />
        <Features en={this.state.en} />
        <BuildInvesting en={this.state.en} />
        <Marketing en={this.state.en} />
        <GetStarted en={this.state.en} />
        <Vision en={this.state.en} />
        <Sponsor en={this.state.en} />
        <Footer
          en={this.state.en}
          shqip={this.shqipChangedHandler}
          german={this.germanChangedHandler}
          english={this.englishChangedHandler}
        />
      </React.Fragment>
    );
  }
}

export default Landing;
