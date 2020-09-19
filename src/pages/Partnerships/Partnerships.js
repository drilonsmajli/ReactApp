import React, { Component } from "react";
import "./Partnerships.js";

import en from "../../data/en/en.json";
import Navbar from "../../components/Partners/Navbar/Navbar.js";
import OurPartners from "../../components/Partners/OurPartners/OurPartners.js";
import StartupIncubatorCarousel from "../../components/StartupIncubator/StartupIncubatorCarousel/StartupIncubatorCarousel";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Partnerships extends Component {
  state = {
    en: en.Partnerships.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.Partnerships.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.Partnerships.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.Partnerships.shqip });
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
      this.setState({ en: en.Partnerships.english });
    } else if (+num == 2) {
      this.setState({ en: en.Partnerships.german });
    } else if (+num == 3) {
      this.setState({ en: en.Partnerships.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <Toolbar
          en={this.state.en}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
        {backdrop}
        <Navbar en={this.state.en} />
        <OurPartners en={this.state.en} />
        <StartupIncubatorCarousel en={this.state.en.partner} />
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

export default Partnerships;
