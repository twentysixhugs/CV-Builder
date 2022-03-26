import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div className="c-field">
        <label className="c-field__label" htmlFor={this.props.id}>
          {this.props.labelText}
        </label>
        <input
          className="c-field__input"
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Field;
