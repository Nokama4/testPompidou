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
class Character extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.selectCharacter();
    this.props.actions.beginGame();
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.actions.nameTyping(value);
  }

  handleRadioChange = (evt) => {
    const { value } = evt.target;
    this.props.actions.changeGender(value);
  }

  render() {
    const { name } = this.props;
    console.log(name);
    return (
      <form
        id="Character"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="genderChoice1">
          <input
            type="radio"
            id="genderChoice1"
            name="gender"
            value="male"
            onChange={this.handleRadioChange}
          />
         Homme
        </label>

        <label htmlFor="genderChoice2">
          <input
            type="radio"
            id="genderChoice2"
            name="gender"
            value="female"
            onChange={this.handleRadioChange}
          />
         Femme
        </label>

        <input
          type="text"
          placeholder="Votre nom de code"
          onChange={this.handleChange}
          value={name}
        />
      </form>
    );
  }
}
/*
 * Export default
 */
export default Character;
