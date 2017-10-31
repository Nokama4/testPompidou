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
const Actions = ({ actions }) => {
  console.log(actions);
  return (
    <div id="actions">
      {actions.map(action => (
        <Action
          key={action.id}
          {...action}
        />
      ))
    }
    </div>
  );
};


/*
 * Export default
 */
export default Actions;
