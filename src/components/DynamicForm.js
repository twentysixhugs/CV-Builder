import React from 'react';
import FormSection from './FormSection';
import Field from './Field';

class DynamicForm extends React.Component {
  render() {
    const { sections } = this.props;
    return (
      <form className="c-form" onSubmit={this.props.onSubmit}>
        <FormSection legend="General information">
          {sections.general.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="First Name"
                  type="text"
                  id="first-name"
                  name="firstname"
                  value={field.firstname}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
                <Field
                  labelText="Last Name"
                  type="text"
                  id="last-name"
                  name="lastname"
                  value={field.lastname}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
                <Field
                  labelText="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={field.email}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'general')
                  }
                />
                <Field
                  labelText="Phone"
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
                  labelText="Skill: "
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
            type="button"
          >
            Add...
          </button>
        </FormSection>
        <FormSection legend="Education">
          {sections.education.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="School name: "
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
                  labelText="Title of study: "
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
                  labelText="From: "
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
                  labelText="To: "
                  type="date"
                  id={`to-${index}`}
                  name={`to`}
                  value={field.to}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'education')
                  }
                  isDisplayingForm={this.props.isDisplayingForm}
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
        </FormSection>
        <FormSection legend="Practical experience">
          {sections.experience.map((field, index) => {
            return (
              <div key={index} className="fields-wrapper">
                <Field
                  labelText="Company name: "
                  type="text"
                  id={`companyName-${index}`}
                  name={`companyName`}
                  value={field.companyName}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="Position: "
                  type="text"
                  id={`position-${index}`}
                  name={`position`}
                  value={field.position}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="Main tasks: "
                  type="textarea"
                  id={`mainTasks-${index}`}
                  name={`mainTasks`}
                  value={field.mainTasks}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="From: "
                  type="date"
                  id={`from-${index}`}
                  name={`from`}
                  value={field.from}
                  onChange={(e) =>
                    this.props.onInputChange(index, e, 'experience')
                  }
                />
                <Field
                  labelText="To: "
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
            type="button"
          >
            Add...
          </button>
        </FormSection>

        <button type="submit">
          BUILD RRRRESUMEEEEEEEEEEE!!!!!!! (preview, can edit later)
        </button>
      </form>
    );
  }
}

export default DynamicForm;