/*
 * Npm import
 */
import React from 'react';
import { Route, withRouter } from 'react-router-dom';

/*
 * Local import
 */
import Nav from 'src/containers/Nav';
import Game from 'src/containers/Game';
import Factions from 'src/containers/Factions';
import Character from 'src/containers/Character';
import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import Logout from 'src/containers/Logout';

/*
 * Code
 */
/* eslint-disable no-else-return */
const Desktop = ({ status }) => (
  <div id="desktop">
    <Nav />
    {status === 'faction' &&
    <Route exact path="/" component={Factions} />
    }
    {status === 'character' &&
    <Route exact path="/" component={Character} />
    }
    {status === 'game' &&
    <Route exact path="/" component={Game} />
    }
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Register} />
    <Route path="/logout" component={Logout} />
  </div>
);

/*
* Export default
*/

export default withRouter(Desktop);
