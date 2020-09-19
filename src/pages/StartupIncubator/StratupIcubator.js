import React, { Component } from "react";
import "../StartupIncubator/StratupIncubator.scss";
import en from "../../data/en/en.json";
import HomePageImage from "../../components/StartupIncubator/HomePageImage/HomePageImage";
import Incubation from "../../components/StartupIncubator/Incubation/Incubation";
import HowWorks from "../../components/StartupIncubator/HowWorks/HowWorks";
import ProcessIncubation from "../../components/StartupIncubator/ProcessIncubation/ProcessIncubation";
import IncubationServices from "../../components/StartupIncubator/IncubationServices/IncubationServices";
import StartupIncubatorCarousel from "../../components/StartupIncubator/StartupIncubatorCarousel/StartupIncubatorCarousel";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class StartupIncubator extends Component {
  state = {
    en: en.StartupIncubator.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.StartupIncubator.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.StartupIncubator.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.StartupIncubator.shqip });
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
      this.setState({ en: en.StartupIncubator.english });
    } else if (+num == 2) {
      this.setState({ en: en.StartupIncubator.german });
    } else if (+num == 3) {
      this.setState({ en: en.StartupIncubator.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="startupincubator">
        <div className="startupIncubator__toolbar">
          <React.Fragment>
            <Toolbar
              en={this.state.en}
              drawerClickHandler={this.drawerToggleClickHandler}
            />
            <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
            {backdrop}
            <HomePageImage en={this.state.en} />
            <Incubation en={this.state.en} />
            <HowWorks en={this.state.en} />
            <ProcessIncubation en={this.state.en} />
            <IncubationServices en={this.state.en} />
            <StartupIncubatorCarousel en={this.state.en} />
            <Footer
              en={this.state.en}
              shqip={this.shqipChangedHandler}
              german={this.germanChangedHandler}
              english={this.englishChangedHandler}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default StartupIncubator;
