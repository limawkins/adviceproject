import "./App.css";
import Card from "../Card/Card.jsx";
import { useState } from "react";
const App = () => {
  const [result, setResult] = useState(3);

  return (
    <article>
      <Card />
    </article>
  );
};

export default App;
