import React from "react";
import "./Nav.scss";

import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/todos">Todo</NavLink>
        <NavLink to="/jobs">Job</NavLink>
      </div>
    );
  }
}

export default Nav;
