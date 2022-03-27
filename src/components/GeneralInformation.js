import React from 'react';
import Field from './Field';

class GeneralInformation extends React.Component {
  render() {
    const { inputFields } = this.props;

    return (
      <fieldset className="c-fieldset c-fieldset--general-information">
        <legend className="c-fieldset__legend">General information</legend>
        {inputFields.map((field, index) => {
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
      </fieldset>
    );
  }
}

export default GeneralInformation;
