import React, { Component } from "react";
import "./Services.scss";

import Header from "../../components/Services/Header/Header";
import ClientNeed from "../../components/Services/Investments/ClientNeed/ClientNeed";
import InvestProcess from "../../components/Services/Investments/InvestProcess/InvestProcess";
import InvestToYourGoal from "../../components/Services/Investments/InvestToYourGoal/InvestToYourGoal";
import RangeOfInvest from "../../components/Services/Investments/RangeOfInvest/RangeOfInvest";
import StartupIncubatorCarousel from "../../components/StartupIncubator/StartupIncubatorCarousel/StartupIncubatorCarousel";
import Footer from "../../components/Toolbar/Footer/Footer";
import en from "../../data/en/en.json";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Services extends Component {
  state = {
    en: en.Services.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.Services.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.Services.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.Services.shqip });
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
      this.setState({ en: en.Services.english });
    } else if (+num == 2) {
      this.setState({ en: en.Services.german });
    } else if (+num == 3) {
      this.setState({ en: en.Services.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="Services">
        <Toolbar
          en={this.state.en}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
        {backdrop}
        <Header en={this.state.en} />
        <InvestToYourGoal en={this.state.en} />
        <RangeOfInvest en={this.state.en} />
        <ClientNeed en={this.state.en} />
        <InvestProcess en={this.state.en} />
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
export default Services;
