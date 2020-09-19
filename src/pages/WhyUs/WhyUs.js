import React, { Component } from "react";
import "./WhyUs.scss";

import Evaluation from "../../components/WhyUs/Evaluation/Evaluation";
import Header from "../../components/WhyUs/Header/Header";
import Process from "../../components/WhyUs/Process/Process";
import WhyAreWePerfect from "../../components/WhyUs/WhyAreWePerfect/WhyAreWePerfect";
import WhyUsProcessInvesting from "../../components/WhyUs/WhyUsProcessInvesting/WhyUsProcessInvesting";
import StartupIncubatorCarousel from "../../components/StartupIncubator/StartupIncubatorCarousel/StartupIncubatorCarousel";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import en from "../../data/en/en.json";

class WhyUs extends Component {
  state = {
    en: en.WhyUs.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.WhyUs.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.WhyUs.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.WhyUs.shqip });
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    let num = window.localStorage.getItem("num");
    if (+num == 1) {
      this.setState({ en: en.WhyUs.english });
    } else if (+num == 2) {
      this.setState({ en: en.WhyUs.german });
    } else if (+num == 3) {
      this.setState({ en: en.WhyUs.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="WhyUs">
        <Toolbar
          en={this.state.en}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
        {backdrop}
        <Header en={this.state.en} />
        <WhyAreWePerfect en={this.state.en} />
        <WhyUsProcessInvesting en={this.state.en} />
        <Evaluation en={this.state.en} />
        <Process en={this.state.en} />
        <StartupIncubatorCarousel en={this.state.en} />
        <Footer
          en={this.state.en}
          shqip={this.shqipChangedHandler}
          german={this.germanChangedHandler}
          english={this.englishChangedHandler}
        />
      </div>
    );
  }
}
export default WhyUs;
