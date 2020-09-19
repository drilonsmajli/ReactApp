import React from "react";
import "./Navbar.scss";

function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <div className="img">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              style={{ margin: "0", padding: "0" }}
            >
              <div className="child">
                <h4>{props.en.image_text.title}</h4>
                <p>{props.en.image_text.content}</p>
                <div className="buttons">
                  <button className="button1">
                    {props.en.image_text.button1}
                  </button>
                  <button className="button2">
                    {props.en.image_text.button2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
