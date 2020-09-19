import React, { Component } from "react";
import "./SignUp.scss";
import Form from "../../components/Forms/Form";
import SignUpFromFacebook from "../../components/Forms/SignUpFromFacebook";
import SignUpCarousel from "../../components/SignUpCarousel/SignUpCarousel";
import en from "../../data/en/en.json";
import Footer from "../../components/Toolbar/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Backdrop from "../../components/Navigation/Backdrop/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class SignUp extends Component {
  state = {
    en: en.LogInSingUp.english,
    sideDrawerOpen: false,
  };

  englishChangedHandler = () => {
    window.localStorage.setItem("num", 1);
    this.setState({ en: en.LogInSingUp.english });
  };

  germanChangedHandler = () => {
    window.localStorage.setItem("num", 2);
    this.setState({ en: en.LogInSingUp.german });
  };
  shqipChangedHandler = () => {
    window.localStorage.setItem("num", 3);
    this.setState({ en: en.LogInSingUp.shqip });
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
      this.setState({ en: en.LogInSingUp.english });
    } else if (+num == 2) {
      this.setState({ en: en.LogInSingUp.german });
    } else if (+num == 3) {
      this.setState({ en: en.LogInSingUp.shqip });
    }
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <div className="signup">
          <Toolbar
            en={this.state.en}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer en={this.state.en} show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className="signup__wrapper">
            <div className="signup__facebook">
              <SignUpFromFacebook en={this.state.en} />
              <div className="hr">
                <hr
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "20%",
                    height: "0",
                  }}
                />
                <p>{this.state.en.form.hr}</p>
                <hr
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "20%",
                    height: "0",
                  }}
                />
              </div>

              <Form
                en={this.state.en}
                login={this.state.en.form.fromEmail.emailButton.signup}
              />
            </div>
            <div className="carousel__signup">
              <SignUpCarousel en={this.state.en} />
            </div>
          </div>
          <Footer
            en={this.state.en}
            shqip={this.shqipChangedHandler}
            german={this.germanChangedHandler}
            english={this.englishChangedHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
