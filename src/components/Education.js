import React from 'react';
import Field from './Field';

class Education extends React.Component {
  render() {
    const { inputFields } = this.props;

    return (
      <fieldset className="c-fieldset c-fieldset--skills">
        <legend className="c-fieldset__legend">Education</legend>
        {inputFields.map((field, index) => {
          return (
            <div key={index} className="fields-wrapper">
              <Field
                labelText="School name"
                type="text"
                id={`schoolName-${index}`}
                name={`schoolName`}
                value={field.schoolName}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'education')
                }
              />
              <Field
                labelText="Title of study"
                type="text"
                id={`titleOfStudy-${index}`}
                name={`titleOfStudy`}
                value={field.titleOfStudy}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'education')
                }
              />
              <Field
                labelText="From"
                type="date"
                id={`from-${index}`}
                name={`from`}
                value={field.from}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'education')
                }
              />
              <Field
                labelText="To"
                type="date"
                id={`to-${index}`}
                name={`to`}
                value={field.to}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'education')
                }
              />
            </div>
          );
        })}
        <button
          onClick={(e) => this.props.onNewInputCreation('education', e)}
          className="c-fieldset__button"
          type="button"
        >
          Add...
        </button>
      </fieldset>
    );
  }
}

export default Education;
