import Die from "./Die";
import "../styles/main-section.css";

export default function App() {
  const dieArray = new Array(10)
    .fill(0)
    .map(() => Math.floor(Math.random() * 7));

  const compArray = dieArray.map((item, index) => (
    <Die key={index} value={item} />
  ));

  return (
    <main>
      <div className="dice-container">{compArray}</div>
    </main>
  );
}
