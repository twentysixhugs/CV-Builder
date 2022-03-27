import React from 'react';
import GeneralInformation from './GeneralInformation';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // TODO get by name
    // https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
  }

  render() {
    const { fieldsets } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="c-form">
        <GeneralInformation
          inputFields={fieldsets.general}
          onInputChange={this.props.onInputChange}
        />
        <Skills
          inputFields={fieldsets.skills}
          onInputChange={this.props.onInputChange}
          onNewInputCreation={this.props.onNewInputCreation}
        />
        <Education
          inputFields={fieldsets.education}
          onInputChange={this.props.onInputChange}
          onNewInputCreation={this.props.onNewInputCreation}
        />
        <Experience
          inputFields={fieldsets.experience}
          onInputChange={this.props.onInputChange}
          onNewInputCreation={this.props.onNewInputCreation}
        />
        <button type="submit">
          BUILD RRRRESUMEEEEEEEEEEE!!!!!!! (preview, can edit later)
        </button>
      </form>
    );
  }
}

export default Form;
