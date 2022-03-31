import '../styles/ResultItem.css';

export default function ResultItem(props) {
  if (props.itemValue) {
    if (props.list) {
      return (
        <li className="c-result-item">
          {props.itemLabel} {props.itemValue}
        </li>
      );
    }

    return (
      <p className="c-result-item">
        {props.itemLabel} {props.itemValue}
      </p>
    );
  }

  return null;
}
