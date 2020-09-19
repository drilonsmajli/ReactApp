import React from "react";
import "./SideDrawer.scss";

import { NavLink, withRouter } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
                <NavLink to="/startup-incubator">
                  {data.StartupIncubator}
                </NavLink>
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
              <li>
                <NavLink to="/why-us">WhyUs</NavLink>
              </li>
              <li>
                <NavLink to="/startup-acceleration">
                  Startup Acceleration
                </NavLink>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(sideDrawer);
