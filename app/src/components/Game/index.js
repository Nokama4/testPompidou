/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Actions from 'src/containers/Actions';

/*
 * Code
 */
class Game extends React.Component {
  componentWillMount() {
    this.props.actions.loadCurrentPage();
  }
  render() {
    const { title, text } = this.props;
    return (
      <div id="game">
        <div id="game-title">{title}</div>
        <div id="game-text">{text}</div>
        <Actions />
      </div>
    );
  }
}


/*
 * Export default
 */
export default Game;
