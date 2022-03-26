import React from 'react';

class GeneralInformation extends React.Component {
  render() {
    return (
      <fieldset className="c-fieldset">{this.props.children}</fieldset>
    );
  }
}

export default GeneralInformation;
