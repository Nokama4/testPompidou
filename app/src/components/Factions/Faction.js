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
class Faction extends React.Component {
  handleClick = () => {
    const { id } = this.props;
    this.props.actions.selectFaction(id);
  }

  render() {
    const { name } = this.props;
    return (
      <div id="faction">
        <button
          className="faction"
          onClick={this.handleClick}
        >
          {name}
        </button>
      </div>
    );
  }
}
/*
 * Export default
 */
export default Faction;
