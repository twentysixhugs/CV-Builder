import React from 'react';

class ResultItem extends React.Component {
  render() {
    if (this.props.itemValue) {
      if (this.props.list) {
        return (
          <li className="c-result-item">
            {this.props.itemLabel} {this.props.itemValue}
          </li>
        );
      }

      return (
        <p className="c-result-item">
          {this.props.itemLabel} {this.props.itemValue}
        </p>
      );
    }

    return null;
  }
}

export default ResultItem;
