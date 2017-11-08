/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import validateEmail from 'validate-email';


/*
 * Local import
 */


/*
 * Code
 */
class Field extends React.PureComponent {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  }

  static defaultProps = {
    value: '',
    type: 'text',
  }


  /**
   * Handlers
   * @type {Functions}
   */


  /*
   * Render
   */
  render() {
    const { name, placeholder, value, type } = this.props;
    return (
      <input
        type={type}
        name={name}
        className="login-input"
        placeholder={placeholder}
        required=""
        value={value}
        onChange={this.props.onChange}
      />
    );
  }
}


/*
 * Export default
 */
export default Field;
