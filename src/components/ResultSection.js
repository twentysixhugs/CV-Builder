import '../styles/ResultSection.css';

export default function ResultSection(props) {
  return (
    <section className="c-result-section">
      <h2 className="c-result-section__heading">{props.heading}</h2>
      {props.children}
    </section>
  );
}
