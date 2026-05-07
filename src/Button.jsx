import "./Button.css";

const Button = (props) => {
  return (
    <button className="CounterNum" onClick={ props.callBack }>
      { props.myText }
    </button>
  );
};

export default Button;
