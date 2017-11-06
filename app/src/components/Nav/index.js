/*
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';


/*
 * Local import
 */


/*
 * Code
 */
const Nav = () => (
  <div id="nav">
    <NavLink
      className="nav-item"
      activeClassName="nav-item--active"
      exact
      to="signup"
    >
    SignUp
    </NavLink>
    <NavLink
      className="nav-item"
      activeClassName="nav-item--active"
      exact
      to="signin"
    >
    SignIn
    </NavLink>
  </div>
);


/*
 * Export default
 */
export default Nav;
