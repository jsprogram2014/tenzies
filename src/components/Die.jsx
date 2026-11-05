import "../styles/die.css";

export default function Die(props) {
  return (
    <button
      onClick={() => props.handleButtonClick(props.id)}
      className={props.isHeld ? "die held" : "die"}
    >
      {props.value}
    </button>
  );
}
