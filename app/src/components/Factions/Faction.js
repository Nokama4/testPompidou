/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */


/*
 * Code
 */
const Faction = ({ name, id }) => {
  console.log(id);
  return (
    <div id="faction">
      <button
        className="faction"
      >
        {name}
      </button>
    </div>
  );
};
/*
 * Export default
 */
export default Faction;
