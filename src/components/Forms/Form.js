import React from "react";
import "./Form.scss";

function Form(props) {
  return (
    <div className="form">
      <form>
        <label>{props.en.form.fromEmail.username}</label>
        <input type="text" defaultValue="username" />
        <i className="fa fa-user-circle"></i>
        <label>{props.en.form.fromEmail.email}</label>
        <input type="text" defaultValue="email" />
        <i className="fa fa-envelope-square"></i>
        <label>{props.en.form.fromEmail.password}</label>
        <input type="text" defaultValue="password" />
        <i className="fa fa-unlock"></i>
      </form>
      <div className="form__button">
        <p>{props.en.form.fromEmail.forgotPassword}</p>
        <button>{props.login}</button>
      </div>
    </div>
  );
}
export default Form;
