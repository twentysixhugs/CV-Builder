import React from 'react';

class GeneralInformation extends React.Component {
  render() {
    return (
      <fieldset className="c-fieldset">
        <legend className="c-fieldset__legend">General information</legend>
        {this.props.children}
      </fieldset>
    );
  }
}

export default GeneralInformation;
