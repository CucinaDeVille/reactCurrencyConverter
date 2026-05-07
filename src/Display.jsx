import "./Display.css";

const Display = (props) => {
  return (
    <div className="CounterNum Counter">
      Geld: { props.money } { props.currency }
      <br></br>
    </div>
  );
};

export default Display;
