import React from 'react';
import GeneralInformation from './GeneralInformation';
import Skills from './Skills';

import {
  SkillsFieldsetData,
  EducationFieldsetData,
  ExperienceFieldsetData,
} from '../modules/fieldsetCreator';

class Form extends React.Component {
  constructor(props) {
    super(props);

    /* Each array represents a key-value pair stored in an object */
    /* On input change, the objects are updated (with deep cloning and setState) */
    /* On creating a new input field, it is added here. So, the form is dynamic */
    /* An array is passed to form fieldsets as inputFields */

    this.state = {
      general: [{ firstname: '', lastname: '', email: '', phone: '' }],
      skills: [],
      education: [],
      experience: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onNewInputCreation = this.onNewInputCreation.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // TODO get by name
    // https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
  }

  onInputChange(index, e, updatedArrayName) {
    /* Create a deep copy of inputField key-value pairs */
    const deepCopy = this.#getDeepCopy(updatedArrayName);

    /* Update the necessary key-value pair */
    deepCopy[index][e.target.name] = e.target.value;

    /* Replace the original array in state with the updated one */
    this.setState({ [updatedArrayName]: deepCopy });
  }

  onNewInputCreation(updatedArrayName, e) {
    /* Create a deep copy of inputField key-value pairs */
    const deepCopy = this.#getDeepCopy(updatedArrayName);

    /* Define which fieldset to create */
    let newInputFields;

    if (updatedArrayName === 'skills') {
      newInputFields = new SkillsFieldsetData();
    }
    if (updatedArrayName === 'education') {
      newInputFields = new EducationFieldsetData();
    }
    if (updatedArrayName === 'experience') {
      newInputFields = new ExperienceFieldsetData();
    }

    deepCopy.push(newInputFields);

    /* Replace the original array in state with the updated one */
    this.setState({ [updatedArrayName]: deepCopy });
  }

  #getDeepCopy(propName) {
    const deepCopy = JSON.parse(JSON.stringify(this.state[propName]));

    return deepCopy;
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="c-form">
        <GeneralInformation
          inputFields={this.state.general}
          onInputChange={this.onInputChange}
        />
        <Skills
          inputFields={this.state.skills}
          onInputChange={this.onInputChange}
          onNewInputCreation={this.onNewInputCreation}
        />
        <button type="submit">BUILD RRRRESUMEEEEEEEEEEE!!!!!!!</button>
      </form>
    );
  }
}

export default Form;
