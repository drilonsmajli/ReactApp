import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="WhyUs__header">
      <div className="img">
        <div className="header__wrapper">
          <h4>{props.en.header.title}</h4>
        </div>
      </div>
    </div>
  );
}
export default Header;
