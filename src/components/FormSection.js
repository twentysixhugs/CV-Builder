import React from 'react';

class FormSection extends React.Component {
  render() {
    return (
      <fieldset className="c-fieldset c-fieldset--skills">
        <legend className="c-fieldset__legend">{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    );
  }
}

export default FormSection;
