import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="Header">
      <div className="img">
        <div className="header__wrapper">
          <h4>{props.en.header.title}</h4>
          <p>{props.en.header.content}</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
