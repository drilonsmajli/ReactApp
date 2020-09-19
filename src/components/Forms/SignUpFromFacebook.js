import React from "react";
import "./SignUpFromFacebook.scss";

function SignUpFromFacebook(props) {
  return (
    <div className="SignUpFromFacebook">
      <div className="content">
        <div className="title">
          <h3>{props.en.form.fromFacebook.title}</h3>
        </div>
        <div className="content__paragraph">
          <p>{props.en.form.fromFacebook.content}</p>
        </div>
      </div>
      <div className="facebook__button">
        <i className="fa fa-facebook"></i>
        <button>{props.en.form.fromFacebook.facebookButton}</button>
      </div>
    </div>
  );
}
export default SignUpFromFacebook;
