import React from 'react';
import Field from './Field';

class Experience extends React.Component {
  render() {
    const { inputFields } = this.props;

    return (
      <fieldset className="c-fieldset c-fieldset--skills">
        <legend className="c-fieldset__legend">
          Practical experience
        </legend>
        {inputFields.map((field, index) => {
          return (
            <div key={index} className="fields-wrapper">
              <Field
                labelText="Company name"
                type="text"
                id={`companyName-${index}`}
                name={`companyName`}
                value={field.companyName}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'experience')
                }
              />
              <Field
                labelText="Position"
                type="text"
                id={`position-${index}`}
                name={`position`}
                value={field.position}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'experience')
                }
              />
              <Field
                labelText="Main tasks"
                type="textarea"
                id={`mainTasks-${index}`}
                name={`mainTasks`}
                value={field.mainTasks}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'experience')
                }
              />
              <Field
                labelText="From"
                type="date"
                id={`from-${index}`}
                name={`from`}
                value={field.from}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'experience')
                }
              />
              <Field
                labelText="To"
                type="date"
                id={`to-${index}`}
                name={`to`}
                value={field.to}
                onChange={(e) =>
                  this.props.onInputChange(index, e, 'experience')
                }
              />
            </div>
          );
        })}
        <button
          onClick={(e) => this.props.onNewInputCreation('experience', e)}
          className="c-fieldset__button"
        >
          Add...
        </button>
      </fieldset>
    );
  }
}

export default Experience;
