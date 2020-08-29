import React from "react";
import "./Navbar.scss";

import MainCarousel from "../Main-carousel/MainCarousel";
import growth from "../../assets/growth.png";
import deposit from "../../assets/deposit.png";
import user from "../../assets/user.png";
import volume from "../../assets/volume.png";

function Navbar(props) {
  return (
    <div className="parent">
      <div className="img">
        <MainCarousel />
        <div className="child">
          <div className="links">
            <div className="logo">
              <img src={growth} alt="img" />
              <text>KreditKos</text>
            </div>
            {props.en.navbar.map((data, i) => {
              {
                console.log(data);
              }
              return (
                <React.Fragment>
                  <div className="menu">{data.Home}</div>
                  <div className="menu">{data.StartupIncubator}</div>
                  <div className="menu">{data.Partnerships}</div>
                  <div className="menu">{data.Contact}</div>
                  <div className="menu">{data.Services}</div>
                </React.Fragment>
              );
            })}

            <div className="butonat">
              <div className="button__wraper">
                <div className="signup">
                  <button className="btn">{props.en.buttons.Signup}</button>
                </div>
                <div className="login">
                  <button className="btn">{props.en.buttons.Login}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="title">
              <p>{props.en.navcontent.title}</p>
            </div>
          </div>
          <div className="info1">
            <p>{props.en.navcontent.paragraph}</p>
          </div>
          <div className="infoButton">
            <div className="infoButton1">
              <button className="btn">{props.en.navcontent.textbutton1}</button>
            </div>
            <div className="infoButton2">
              <button className="btn">{props.en.navcontent.textbutton2}</button>
            </div>
          </div>
          <div className="Navbar__footer">
            <div className="demo__account">
              <img src={user} alt="img" />
              <h5>{props.en.navcontent.accounts.demoaccounts}</h5>
              <p>{props.en.navcontent.accounts.demoaccountsContent}</p>
            </div>
            <div className="deposit">
              <img src={deposit} alt="img" />
              <h5>{props.en.navcontent.accounts.deposit}</h5>
              <p>{props.en.navcontent.accounts.deposit}</p>
            </div>
            <div className="investment">
              <img src={volume} alt="img" />
              <h5>{props.en.navcontent.accounts.investment}</h5>
              <p>{props.en.navcontent.accounts.investmentContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
