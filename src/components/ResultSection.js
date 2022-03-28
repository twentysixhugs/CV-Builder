import React from 'react';

class ResultSection extends React.Component {
  render() {
    return (
      <section className="c-result-section">
        <h2 className="c-result-section__heading">{this.props.heading}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default ResultSection;
