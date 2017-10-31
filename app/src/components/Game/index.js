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
    const { title, text, loaded } = this.props;
    console.log(title);
    return (
      <div id="game">
        <div id="game-title">{title}</div>
        <div id="game-text">{text}</div>
        {loaded &&
          <Actions />
        }
      </div>
    );
  }
}


/*
 * Export default
 */
export default Game;
