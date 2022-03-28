import './styles/App.css';
import React from 'react';
import DynamicForm from './components/DynamicForm';
import Result from './components/Result';

import {
  SkillsFieldsetData,
  EducationFieldsetData,
  ExperienceFieldsetData,
} from './modules/fieldsetCreator';

class App extends React.Component {
  constructor(props) {
    super(props);

    /* Each array represents a key-value pair stored in an object */
    /* On input change, the objects are updated (with deep cloning and setState) */
    /* On creating a new input field, it is added here. So, the form is dynamic */
    /* An array is passed to form as fieldsets */

    this.state = {
      general: [{ firstname: '', lastname: '', email: '', phone: '' }],
      skills: [],
      education: [],
      experience: [],
      isDisplayingForm: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewInputCreation = this.handleNewInputCreation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(index, e, updatedArrayName) {
    /* Create a deep copy of inputField key-value pairs */
    const deepCopy = this.#getDeepCopy(updatedArrayName);

    /* Update the necessary key-value pair */
    deepCopy[index][e.target.name] = e.target.value;

    /* Replace the original array in state with the updated one */
    this.setState({ [updatedArrayName]: deepCopy });
  }
  handleNewInputCreation(updatedArrayName, e) {
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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isDisplayingForm: false }, console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        {this.state.isDisplayingForm ? (
          <DynamicForm
            fieldsets={{
              general: this.state.general,
              skills: this.state.skills,
              education: this.state.education,
              experience: this.state.experience,
            }}
            onNewInputCreation={this.handleNewInputCreation}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            isDisplayingForm={this.state.isDisplayingForm}
          />
        ) : (
          <Result
            fieldsets={{
              general: this.state.general,
              skills: this.state.skills,
              education: this.state.education,
              experience: this.state.experience,
            }}
            isDisplayingForm={this.state.isDisplayingForm}
          />
        )}
      </div>
    );
  }
}

export default App;
