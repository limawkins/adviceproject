import "./App.css";
import Card from "../Card/Card.jsx";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState(3);
  const handleClick = (operator) => {
    if (operator === "plus") {
      setResult(result + 1);
    } else if (operator === "minus") {
      setResult(result - 1);
    }
  };
  return (
    <article>
      <button onClick={() => handleClick("minus")}>-1</button>
      <p>{result}</p>
      <button onClick={() => handleClick("plus")}>+1</button>
      <Card />
    </article>
  );
};

export default App;
