import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import GeneralInformation from './GeneralInformation';
import Skill from './Skill';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [{ firstname: '', lastname: '', email: '', phone: '' }],
      skills: [
        { skillInfo: 'I can hug' },
        { skillInfo: 'I can write code' },
        { skillInfo: 'I am self-disciplined' },
      ],
      education: [],
      experience: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // TODO get by name
    // https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
  }

  onInputChange(index, e, updatedArrayName) {
    /* Create a deep copy of the array of input key-value pairs */
    const deepCopy = JSON.parse(
      JSON.stringify(this.state[updatedArrayName]),
    );
    /* Update the necessary key-value pair */
    deepCopy[index][e.target.name] = e.target.value;

    /* Replace the original array in state with the updated one */
    this.setState({ [updatedArrayName]: deepCopy });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="c-form">
        <GeneralInformation
          inputFields={this.state.general}
          onInputChange={this.onInputChange}
          legend="General information"
        />
        <button type="submit">BUILD RRRRESUMEEEEEEEEEEE!!!!!!!</button>
      </form>
    );
  }
}

export default Form;
