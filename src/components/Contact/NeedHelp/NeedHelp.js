import React from "react";
import "./NeedHelp.scss";

import img from "../../../assets/needhelp.png";

function NeedHelp(props) {
  return (
    <div className="NeedHelp">
      <div className="container">
        <div className="NeedHelp__wrapper">
          <div className="post">
            <div className="content">
              <div className="text">
                <h4>{props.en.needHelp.title}</h4>
                <p>{props.en.needHelp.content}</p>
              </div>
              <div className="content__button">
                <button>{props.en.needHelp.button}</button>
              </div>
            </div>
            <div className="NeedHelp__img">
              <img src={img} alt="needhelp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NeedHelp;
