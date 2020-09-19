import React, { Component } from "react";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";

import MainCarousel from "../Main-carousel/MainCarousel";
import deposit from "../../../assets/deposit.png";
import user from "../../../assets/user.png";
import volume from "../../../assets/volume.png";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import Backdrop from "../../Navigation/Backdrop/Backdrop";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";

class Navbar extends Component {
  state = {
    sideDrawerOpen: false,
  };
  viewPartnerHandler = () => {
    this.props.history.push("/partnerships");
  };
  loginHandler = () => {
    this.props.history.push("/login");
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="navbar">
        <div className="img">
          <MainCarousel />
          <div className="child">
            <Toolbar
              en={this.props.en}
              drawerClickHandler={this.drawerToggleClickHandler}
            />
            <SideDrawer en={this.props.en} show={this.state.sideDrawerOpen} />
            {backdrop}

            <div className="info">
              <div className="title">
                <h3>{this.props.en.navcontent.title}</h3>
                <p>{this.props.en.navcontent.paragraph}</p>
              </div>
            </div>
            <div className="infoButton">
              <div className="infoButton1">
                <button className="btn" onClick={this.loginHandler}>
                  {this.props.en.navcontent.textbutton1}
                </button>
              </div>
              <div className="infoButton2">
                <button className="btn" onClick={this.viewPartnerHandler}>
                  {this.props.en.navcontent.textbutton2}
                </button>
              </div>
            </div>
            <div className="Navbar__footer">
              <div className="footer__wrapper">
                <div className="demo__account">
                  <img src={user} alt="img" />
                  <h5>{this.props.en.navcontent.accounts.demoaccounts}</h5>
                  <p>{this.props.en.navcontent.accounts.demoaccountsContent}</p>
                </div>
                <div className="deposit">
                  <img src={deposit} alt="img" />
                  <h5>{this.props.en.navcontent.accounts.deposit}</h5>
                  <p>{this.props.en.navcontent.accounts.deposit}</p>
                </div>
                <div className="investment">
                  <img src={volume} alt="img" />
                  <h5>{this.props.en.navcontent.accounts.investment}</h5>
                  <p>{this.props.en.navcontent.accounts.investmentContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
