/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Faction from 'src/containers/Faction';
/*
 * Code
 */
class Factions extends React.Component {
  componentWillMount() {
    this.props.actions.loadFactions();
  }

  handleClick = () => {
    // this.props.actions.selectFaction();
  }
  render() {
    const { factions, loaded } = this.props;

    return (
      <div id="factions">

        {factions.map(faction => (
          <Faction
            key={faction.name}
            {...faction}
          />
        ))
        }

      </div>
    );
  }
}

/*
 * Export default
 */
export default Factions;
