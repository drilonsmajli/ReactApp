import React from "react";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavLink, withRouter } from "react-router-dom";

import img from "../../../assets/growth.png";
import img1 from "../../../assets/startup.png";
import img2 from "../../../assets/high.png";
import img3 from "../../../assets/group-1.png";
import img4 from "../../../assets/group.png";

const toolbar = (props) => {
  const loginHandler = () => {
    props.history.push("/login");
  };
  const signUpHandler = () => {
    props.history.push("/signup");
  };
  return (
    <header className="toolbar">
      <div className="container-fluid">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo">
            <img src={img} alt="growth" />
            <p>KreditKos</p>
          </div>

          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              {props.en.navbar.map((data, i) => {
                return (
                  <React.Fragment key={i}>
                    <li>
                      <NavLink exact to="/">
                        {data.Home}
                      </NavLink>
                    </li>
                    <li>
                      <div className="menu">
                        <div className="dropdown">
                          <span>
                            <NavLink to="/startup-incubator">
                              <i className="fa fa-sort-down icon"></i>
                              {data.StartupIncubator}
                            </NavLink>
                          </span>
                          <div className="dropdown-content">
                            <i className="fa fa-caret-up"></i>
                            <div className="wrapper">
                              <div className="row">
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img4} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <NavLink to="/why-us">
                                      <p>Why Us?</p>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img3} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Why Us?</p>
                                  </div>
                                </div>
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img3} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Why Us?</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img2} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Startup incubation</p>
                                  </div>
                                </div>
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img2} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Startup incubation</p>
                                  </div>
                                </div>
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img2} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Startup incubation</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img1} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <NavLink to="/startup-acceleration">
                                      <p>Startup Acceleration</p>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img1} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Startup Acceleration</p>
                                  </div>
                                </div>
                                <div className="dropdown__post">
                                  <div className="image">
                                    <img src={img1} alt="img4" />
                                  </div>
                                  <div className="image__content">
                                    <p>Startup Acceleration</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <NavLink to="/partnerships">{data.Partnerships}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/news">{data.News}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">{data.Contact}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">{data.Services}</NavLink>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className="spacer" />
          <div className="toolbar__buttons">
            <div className="login">
              <button className="btn" onClick={loginHandler}>
                {props.en.buttons.Login}
              </button>
            </div>
            <div className="signup">
              <button className="btn" onClick={signUpHandler}>
                {props.en.buttons.Signup}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default withRouter(toolbar);
