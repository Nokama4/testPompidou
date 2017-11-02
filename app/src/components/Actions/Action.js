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
class Action extends React.Component {
  handleClick = () => {
    this.props.actions.selectAction(this.props.targetSuccess);
    this.props.actions.loadCurrentPage();
  }
  render() {
    const { text } = this.props;
    console.log(this.props);
    return (
      <div id="action">
        <button
          id="action-text"
          onClick={this.handleClick}
        >
          {text}
        </button>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Action;
