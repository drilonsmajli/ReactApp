import React from "react";
import "./NotFound.scss";
import { NavLink, withRouter } from "react-router-dom";

const NotFound = (props) => {
  const backHomeHandler = () => {
    props.history.goBack();
  };
  return (
    <div className="NotFound">
      <div className="img"></div>
      <div className="NotFound__wrapper">
        <button onClick={backHomeHandler}>Go Back</button>
      </div>
    </div>
  );
};

export default withRouter(NotFound);
