import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="Header">
      <div className="container-fluid">
        <div className="img">
          <div
            className="col-lg-12 col-md-12 col-sm-12"
            style={{ margin: "0", padding: "0" }}
          >
            <div className="header__wrapper1">
              <h4>{props.en.header.title}</h4>
              <p>{props.en.header.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
