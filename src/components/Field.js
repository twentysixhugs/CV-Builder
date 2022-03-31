import '../styles/Field.css';

export default function Field(props) {
  let inputToRender = (
    <input
      className="c-field__input"
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
    ></input>
  );

  if (props.textArea) {
    inputToRender = (
      <textarea
        className="c-field__input"
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      ></textarea>
    );
  }

  return (
    <div className="c-field">
      <label className="c-field__label" htmlFor={props.id}>
        {props.labelText}
      </label>
      {inputToRender}
    </div>
  );
}
