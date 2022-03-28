import React from 'react';

class Field extends React.Component {
  render() {
    let inputToRender = (
      <input
        className="c-field__input"
        type={this.props.type}
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        required={this.props.required}
      ></input>
    );

    if (this.props.textArea) {
      inputToRender = (
        <textarea
          className="c-field__input"
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          required={this.props.required}
        ></textarea>
      );
    }

    return (
      <div className="c-field">
        <label className="c-field__label" htmlFor={this.props.id}>
          {this.props.labelText}
          {inputToRender}
        </label>
      </div>
    );
  }
}

export default Field;
