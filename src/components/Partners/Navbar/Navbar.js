import React from "react";
import "./Navbar.scss";

function Navbar(props) {
  return (
    <div className="NavbarPartners">
      <div className="img">
        <div className="child">
          <h4>{props.en.partner.title}</h4>
          <p>{props.en.partner.content}</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
