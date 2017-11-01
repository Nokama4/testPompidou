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
import Character from 'src/components/Character';

/*
 * Code
 */
/* eslint-disable object-curly-newline */
const Desktop = ({ logged, factionChoice, chaConfig, loaded }) => (
  <div id="desktop">
    <Nav />

    {logged &&
    <Factions />
      }

    {!factionChoice &&
    <Character />
      }

    {!chaConfig &&
    <Game />
      }
  </div>
);


/*
 * Export default
 */
export default Desktop;
