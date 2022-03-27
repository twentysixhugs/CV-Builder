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
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Field;
