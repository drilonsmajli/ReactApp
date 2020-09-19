import React, { Component } from "react";
import "./Contact.scss";
import Header from "../../components/Contact/Header/Header";
import ContactUs from "../../components/Contact/ContactUs/ContactUs";
import NeedHelp from "../../components/Contact/NeedHelp/NeedHelp";
import en from "../../data/en/en.json";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Contact extends Component {
  state = {
    en: en.Contact.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.Contact.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.Contact.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.Contact.shqip });
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
      this.setState({ en: en.Contact.english });
    } else if (+num == 2) {
      this.setState({ en: en.Contact.german });
    } else if (+num == 3) {
      this.setState({ en: en.Contact.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="Contact">
        <Toolbar
          en={this.state.en}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
        {backdrop}
        <Header en={this.state.en} />
        <ContactUs en={this.state.en} />
        <NeedHelp en={this.state.en} />
        {/* <Footer
          en={this.state.en}
          shqip={this.shqipChangedHandler}
          german={this.germanChangedHandler}
          english={this.englishChangedHandler}
        /> */}
      </div>
    );
  }
}

export default Contact;
