/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
class Logout extends React.Component {
    /**
     * PropTypes
     * @type {Object}
     */
    static propTypes = {
      actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    }


    componentWillMount() {
      this.props.actions.logout();
    }
    render() {
      return (
        <div> Vous êtes bien déconnecté</div>
      );
    }
}

/*
 * Export default
 */
export default Logout;
