import React, { Component } from "react";
import "./About.scss";
import Navbar from "../../components/About/Navbar/Navbar";
import WhoAreWe from "../../components/About/WhoAreWe/WhoAreWe";
import Values from "../../components/About/Values/Values";
import Mission from "../../components/About/Mission/Mission";
import en from "../../data/en/en.json";

import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class About extends Component {
  state = {
    en: en.About.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.About.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.About.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.About.shqip });
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
      this.setState({ en: en.About.english });
    } else if (+num == 2) {
      this.setState({ en: en.About.german });
    } else if (+num == 3) {
      this.setState({ en: en.About.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="About">
        <Toolbar
          en={this.state.en}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
        {backdrop}
        <Navbar en={this.state.en} />
        <WhoAreWe en={this.state.en} />
        <Values en={this.state.en} />
        <Mission en={this.state.en} />
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

export default About;
