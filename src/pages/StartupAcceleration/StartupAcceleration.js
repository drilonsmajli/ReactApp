import React, { Component } from "react";
import "./StartupAcceleration.scss";
import Header from "../../components/StartupAcceleration/Header/Header";
import InvestingProcess from "../../components/StartupAcceleration/InvestingProcess/InvestingProcess";
import Process from "../../components/StartupAcceleration/Process/Process";
import Program from "../../components/StartupAcceleration/Program/Program";
import Services from "../../components/StartupAcceleration/Services/Services";
import StartupIncubatorCarousel from "../../components/StartupIncubator/StartupIncubatorCarousel/StartupIncubatorCarousel";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import en from "../../data/en/en.json";

class StartupAcceleration extends Component {
  state = {
    en: en.StartupAcceleration.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.StartupAcceleration.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.StartupAcceleration.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.StartupAcceleration.shqip });
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
      this.setState({ en: en.StartupAcceleration.english });
    } else if (+num == 2) {
      this.setState({ en: en.StartupAcceleration.german });
    } else if (+num == 3) {
      this.setState({ en: en.StartupAcceleration.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="StartupAcceleration">
        <Toolbar
          en={this.state.en}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
        {backdrop}
        <Header en={this.state.en} />
        <Program en={this.state.en} />
        <InvestingProcess en={this.state.en} />
        <Services en={this.state.en} />
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
export default StartupAcceleration;
