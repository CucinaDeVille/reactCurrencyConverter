import "./Display.css";

export default function Display (props) {
  return (
    <div className="CounterNum Counter">
      Geld: { props.money } { props.currency }
      <br></br>
    </div>
  );
}