import '../styles/FormSection.css';

export default function FormSection(props) {
  return (
    <fieldset className="c-fieldset">
      <legend className="c-fieldset__legend">{props.legend}</legend>
      {props.children}
    </fieldset>
  );
}
