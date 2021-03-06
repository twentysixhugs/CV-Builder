import { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import Result from './components/Result';

import {
  SkillsFieldsetData,
  EducationFieldsetData,
  ExperienceFieldsetData,
} from './modules/fieldsetCreator';

import './styles/App.css';

export default function App() {
  /* Each array represents a key-value pair stored in an object */
  /* On input change, the objects are updated (with deep cloning and setState) */
  /* On creating a new input field, it is added here. So, the form is dynamic */
  /* An array is passed to form as fieldsets */

  const [fieldsets, setFieldsets] = useState({
    general: [{ firstName: '', lastName: '', email: '', phone: '' }],
    skills: [],
    education: [],
    experience: [],
  });

  const [isDisplayingForm, setIsDisplayingForm] = useState(true);

  function handleInputChange(index, e, updatedArrayName) {
    /* Create a deep copy of inputField key-value pairs */
    const deepCopy = _getDeepFieldsetCopy(updatedArrayName);

    /* Update the necessary key-value pair */
    deepCopy[index][e.target.name] = e.target.value;

    /* Replace the original array in state with the updated one */

    setFieldsets({ ...fieldsets, [updatedArrayName]: deepCopy });
  }

  function handleNewInputCreation(updatedArrayName) {
    /* Create a deep copy of fieldsets key-value pairs */
    const deepCopy = _getDeepFieldsetCopy(updatedArrayName);

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
    setFieldsets({ ...fieldsets, [updatedArrayName]: deepCopy });
  }

  function handleRemoveInput(index, updatedArrayName) {
    /* Create a deep copy of fieldsets key-value pairs */
    const deepCopy = _getDeepFieldsetCopy(updatedArrayName);

    /* Remove the necessary key-value pair */
    deepCopy.splice(index, 1);

    /* Replace the original array in state with the updated one */
    setFieldsets({ ...fieldsets, [updatedArrayName]: deepCopy });
  }

  function _getDeepFieldsetCopy(propName) {
    const deepCopy = JSON.parse(JSON.stringify(fieldsets[propName]));

    return deepCopy;
  }

  function _getNotEmptyFieldsets() {
    /* Returns an array without empty fieldsets.
    A user may create a fieldset but leave it blank completely.
    These fieldsets will not be displayed because they are empty */
    let deepStateCopy = {};
    let emptyFieldsets = [];

    for (const prop in fieldsets) {
      if (Array.isArray(fieldsets[prop])) {
        deepStateCopy[prop] = _getDeepFieldsetCopy(prop);
      }
    }

    for (const formSectionName in deepStateCopy) {
      deepStateCopy[formSectionName].forEach((fieldset) => {
        let areAllFieldsEmpty = true;

        for (const fieldName in fieldset) {
          if (fieldset[fieldName]) {
            areAllFieldsEmpty = false;
          }
        }

        if (areAllFieldsEmpty) {
          emptyFieldsets.push({
            section: formSectionName,
            fieldset,
          });
        }
      });
    }

    for (const emptyFieldset of emptyFieldsets) {
      if (emptyFieldset.section === 'general') continue;

      const sectionWithEmptyFieldset =
        deepStateCopy[emptyFieldset.section];

      const emptyFieldsetIndex = sectionWithEmptyFieldset.indexOf(
        emptyFieldset.fieldset,
      );

      sectionWithEmptyFieldset.splice(emptyFieldsetIndex, 1);
    }

    return deepStateCopy;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const notEmptyFieldsets = _getNotEmptyFieldsets();

    setFieldsets({ ...notEmptyFieldsets });
    setIsDisplayingForm(false);
  }

  function handleResultEdit() {
    setIsDisplayingForm(true);
  }

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__heading">CV Builder</h1>
      </header>
      {isDisplayingForm ? (
        <DynamicForm
          sections={{ ...fieldsets }}
          onNewInputCreation={handleNewInputCreation}
          onRemoveInput={handleRemoveInput}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <Result
          sections={{ ...fieldsets }}
          onResultEdit={handleResultEdit}
        />
      )}
      <footer className="App__footer">
        Made with love by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/twentysixhugs"
        >
          &nbsp;Iaan Lamanosau :3
        </a>
        <a
          className="footer__code-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/twentysixhugs/CV-Builder"
        >
          View code
        </a>
      </footer>
    </div>
  );
}
