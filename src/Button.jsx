import "./Button.css";

export default function Button (props) {
  return (
    <button className="CounterNum" onClick={ props.callBack }>
      { props.myText }
    </button>
  );
}