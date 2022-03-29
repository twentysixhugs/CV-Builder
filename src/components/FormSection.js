import React from 'react';
import '../styles/FormSection.css';

class FormSection extends React.Component {
  render() {
    return (
      <fieldset className="c-fieldset">
        <legend className="c-fieldset__legend">{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    );
  }
}

export default FormSection;
