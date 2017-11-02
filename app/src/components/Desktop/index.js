/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Nav from 'src/components/Nav';
import Game from 'src/containers/Game';
import Factions from 'src/containers/Factions';
import Character from 'src/containers/Character';

/*
 * Code
 */
/* eslint-disable object-curly-newline */
const Desktop = ({ status }) => (
  <div id="desktop">
    <Nav />

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
