import React from 'react';
import FormSection from './FormSection';
import Field from './Field';
import '../styles/DynamicForm.css';

class DynamicForm extends React.Component {
  render() {
    const { sections } = this.props;
    return (
      <form
        onKeyDown={(e) => e.key != 'Enter'}
        className="c-form"
        onSubmit={this.props.onSubmit}
      >
        <FormSection legend="Personal information">
          {sections.general.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="First Name "
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={field.firstName}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
                <Field
                  labelText="Last Name "
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={field.lastName}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
                <Field
                  labelText="Email "
                  type="email"
                  id="email"
                  name="email"
                  value={field.email}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
                <Field
                  labelText="Phone "
                  type="text"
                  id="phone"
                  name="phone"
                  value={field.phone}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
              </div>
            );
          })}
        </FormSection>
        <FormSection legend="Skills">
          {sections.skills.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="Skill "
                  type="text"
                  id={`skill-${index}`}
                  name={`skillInfo`}
                  value={field.skillInfo}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'skills')
                  }
                />
                <button
                  type="button"
                  className="c-fieldset__button c-fieldset__button--remove"
                  onClick={(e) =>
                    this.props.onRemoveInput(index, 'skills', e)
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            onClick={(e) => this.props.onNewInputCreation('skills', e)}
            className="c-fieldset__button c-fieldset__button--add"
            type="button"
          >
            Add more
          </button>
        </FormSection>
        <FormSection legend="Education">
          {sections.education.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="School name "
                  type="text"
                  id={`schoolName-${index}`}
                  name={`schoolName`}
                  value={field.schoolName}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'education')
                  }
                  isDisplayingForm={this.props.isDisplayingForm}
                />
                <Field
                  labelText="Title of study "
                  type="text"
                  id={`titleOfStudy-${index}`}
                  name={`titleOfStudy`}
                  value={field.titleOfStudy}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'education')
                  }
                  isDisplayingForm={this.props.isDisplayingForm}
                />
                <Field
                  labelText="From "
                  type="date"
                  id={`from-${index}`}
                  name={`from`}
                  value={field.from}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'education')
                  }
                  isDisplayingForm={this.props.isDisplayingForm}
                />
                <Field
                  labelText="To "
                  type="date"
                  id={`to-${index}`}
                  name={`to`}
                  value={field.to}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'education')
                  }
                  isDisplayingForm={this.props.isDisplayingForm}
                />
                <button
                  type="button"
                  className="c-fieldset__button c-fieldset__button--remove"
                  onClick={(e) =>
                    this.props.onRemoveInput(index, 'education', e)
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            onClick={(e) => this.props.onNewInputCreation('education', e)}
            className="c-fieldset__button c-fieldset__button--add"
            type="button"
          >
            Add more
          </button>
        </FormSection>
        <FormSection legend="Practical experience">
          {sections.experience.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="Company name "
                  type="text"
                  id={`companyName-${index}`}
                  name={`companyName`}
                  value={field.companyName}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="Position "
                  type="text"
                  id={`position-${index}`}
                  name={`position`}
                  value={field.position}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="Main tasks "
                  type="text"
                  id={`mainTasks-${index}`}
                  name={`mainTasks`}
                  value={field.mainTasks}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                  textArea={true}
                />
                <Field
                  labelText="From "
                  type="date"
                  id={`from-${index}`}
                  name={`from`}
                  value={field.from}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="To "
                  type="date"
                  id={`to-${index}`}
                  name={`to`}
                  value={field.to}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <button
                  type="button"
                  className="c-fieldset__button c-fieldset__button--remove"
                  onClick={(e) =>
                    this.props.onRemoveInput(index, 'experience', e)
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            onClick={(e) => this.props.onNewInputCreation('experience', e)}
            className="c-fieldset__button c-fieldset__button--add"
            type="button"
          >
            Add more
          </button>
        </FormSection>

        <button type="submit" className="c-form__btn c-form__btn--preview">
          Preview
        </button>
      </form>
    );
  }
}

export default DynamicForm;
