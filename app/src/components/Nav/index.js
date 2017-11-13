/*
 * Npm import
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


/*
 * Local import
 */


/*
 * Code
 */
const Nav = () => (
  <div id="nav">
    <NavLink
      exact
      className="nav-item"
      activeClassName="nav-item--active"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      exact
      className="nav-item"
      activeClassName="nav-item--active"
      to="/signup"
    >
    SignUp
    </NavLink>
    <NavLink
      exact
      className="nav-item"
      activeClassName="nav-item--active"
      to="/signin"
    >
    SignIn
    </NavLink>
    <NavLink
      exact
      className="nav-item"
      activeClassName="nav-item--active"
      to="/logout"
    >
    Logout
    </NavLink>
  </div>
);


/*
 * Export default
 */
export default withRouter(Nav);
