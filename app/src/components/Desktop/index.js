/*
 * Npm import
 */
import React from 'react';
import { Route } from 'react-router-dom';

/*
 * Local import
 */
import Nav from 'src/components/Nav';
import Game from 'src/containers/Game';
import Factions from 'src/containers/Factions';
import Character from 'src/containers/Character';
import Login from 'src/components/Login';
import Register from 'src/containers/Register';

/*
 * Code
 */
/* eslint-disable object-curly-newline */
const Desktop = ({ status }) => (
  <div id="desktop">
    <Nav />
    <Route exact path="/" component={Factions} />
    <Route exact path="/signin" component={Login} />
    <Route exact path="/signup" component={Register} />
    {status === 'faction' &&
    <Factions />
      }

    {status === 'character' &&
    <Character />
      }

    {status === 'game' &&
    <Game />
      }
  </div>
);


/*
 * Export default
 */
export default Desktop;
