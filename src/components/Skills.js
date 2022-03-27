import React from 'react';
import Field from './Field';

class Skills extends React.Component {
  render() {
    const { inputFields } = this.props;

    return (
      <fieldset className="c-fieldset c-fieldset--skills">
        <legend className="c-fieldset__legend">Skills</legend>
        {inputFields.map((field, index) => {
          return (
            <div key={index} className="fields-wrapper">
              <Field
                labelText="Skill"
                type="text"
                id={`skill-${index}`}
                name={`skillInfo`}
                value={field.skillInfo}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'skills')
                }
              />
            </div>
          );
        })}
        <button
          onClick={(e) => this.props.onNewInputCreation('skills', e)}
          className="c-fieldset__button"
        >
          Add...
        </button>
      </fieldset>
    );
  }
}

export default Skills;
