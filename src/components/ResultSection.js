import React from 'react';
import '../styles/ResultSection.css';

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
