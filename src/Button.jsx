import "./Button.css";

const Button = (props) => {
  return (
    <button className="CounterNum" onClick={ null }>
      { props.myText }
    </button>
  );
};

export default Button;
