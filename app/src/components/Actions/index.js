/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Action from './Action';

/*
 * Code
 */
const Actions = ({ actions }) => (
  <div id="actions">
    {actions.map(action => (
      <Action
        key={action.text}
        {...action}
      />
      ))
    }
  </div>
);


/*
 * Export default
 */
export default Actions;
