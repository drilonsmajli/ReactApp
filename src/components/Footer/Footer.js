import React, { Component } from "react";
import "./Footer.scss";

import logo from "../../assets/logo.png";
import apple from "../../assets/apple.png";
import playStore from "../../assets/play-store.png";

class Footer extends Component {
  state = {
    light: false,
  };

  changeLightHandler = () => {
    let theme = window.localStorage.getItem("theme");
    console.log(theme);
    if (theme == "true") {
      this.setState({ light: false });
      window.localStorage.setItem("theme", false);
    } else {
      this.setState({ light: true });
      window.localStorage.setItem("theme", true);
    }
  };

  componentDidMount() {
    let theme = window.localStorage.getItem("theme");
    this.setState({ light: theme == "true" ? true : false });
  }

  render() {
    let light = null;
    let color = null;
    if (this.state.light) {
      light = "rgb(39, 34, 34)";
      color = "white";
    } else {
      light = "white";
      color = "rgb(39, 34, 34)";
    }
    return (
      <div className="footer" style={{ backgroundColor: light, color: color }}>
        <div className="footer__top">
          <div className="title">
            <h1>{this.props.en.footer.subscribe}</h1>
          </div>
          <div className="buttons">
            <input type="text" value="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <hr
          asdadasd
          style={{
            color: "black",
            backgroundColor: "white",
            width: "60%",
          }}
        />
        <div className="footer__info">
          <div className="adress">
            <p>San Francisco HQ</p>
            <p>San Francisco,CA 49503</p>
            <p>San Francisco, CA 49503</p>
            <br />
            <p>Tel:(888)-353-3532</p>
            <p>Fax:(888)-353-3532</p>
          </div>
          <div className="about">
            <p>{this.props.en.footer.about.about}</p>
            <p>{this.props.en.footer.about.team}</p>
            <p>{this.props.en.footer.about.approach}</p>
            <p>{this.props.en.footer.about.news}</p>
            <p>{this.props.en.footer.about.aboutus}</p>
          </div>
          <div className="legal">
            <p>{this.props.en.footer.legal.legal}</p>
            <p>{this.props.en.footer.legal.terms}</p>
            <p>{this.props.en.footer.legal.privatcy}</p>
            <p>{this.props.en.footer.legal.copyright}</p>
            <p>{this.props.en.footer.legal.dislaimers}</p>
          </div>
          <div className="support">
            <p>{this.props.en.footer.support.support}</p>
            <p>{this.props.en.footer.support.faq}</p>
            <p>{this.props.en.footer.support.features}</p>
            <p>{this.props.en.footer.support.contact}</p>
            <p>{this.props.en.footer.support.guides}</p>
            <p>{this.props.en.footer.support.documentation}</p>
          </div>
          <div className="logo">
            <div className="top">
              <div className="growth">
                <img src={logo} alt="growth" />
              </div>
              <div className="name">KreditKos</div>
            </div>
            <div className="bottom">
              <p>
                <p>{this.props.en.footer.download}</p>
              </p>
              <div className="logos">
                <div className="logo1">
                  <img src={apple} alt="apple" />
                  <div className="line1">
                    <p>Download on</p>
                  </div>
                  <div className="line2">
                    <p>App Store</p>
                  </div>
                </div>
                <div className="logo2">
                  <img src={playStore} alt="playStore" />
                  <div className="line1">
                    <p>Get it on</p>
                  </div>
                  <div className="line2">
                    <p>Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          asdadasd
          style={{
            color: "black",
            backgroundColor: "white",
            width: "60%",
          }}
        />
        <div className="social">
          <div className="social__wrapper">
            <div className="copyright">
              <p>Copyright 2020 KreditKos Inc.All rights recesived.</p>
            </div>
            <div className="icons">
              <i className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className="changebutton">
              <button onClick={this.changeLightHandler}>
                {!this.state.light ? "Dark" : "Light"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
