import React, { Component } from "react";
import "./Team.scss";

import Header from "../../components/Team/Header/Header";
import OurTeam from "../../components/Team/OurTeam/OurTeam";
import StartupIncubatorCarousel from "../../components/StartupIncubator/StartupIncubatorCarousel/StartupIncubatorCarousel";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import en from "../../data/en/en.json";

class Team extends Component {
  state = {
    en: en.Team.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.Team.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.Team.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.Team.shqip });
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
      this.setState({ en: en.Team.english });
    } else if (+num == 2) {
      this.setState({ en: en.Team.german });
    } else if (+num == 3) {
      this.setState({ en: en.Team.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="Team">
        <React.Fragment>
          <Toolbar
            en={this.state.en}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
          {backdrop}
          <Header en={this.state.en} />
          <OurTeam en={this.state.en} />
          <StartupIncubatorCarousel en={this.state.en} />
          <Footer
            en={this.state.en}
            shqip={this.shqipChangedHandler}
            german={this.germanChangedHandler}
            english={this.englishChangedHandler}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default Team;
