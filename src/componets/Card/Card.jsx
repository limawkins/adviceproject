import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = () => {
  // https://api.adviceslip.com/advice
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          body: data.slip.advice,
        })
      )
      .finally(() => setIsLoading(false));
  }, []);
  const handleClick = () => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          body: data.slip.advice,
        })
      )
      .finally(() => setIsLoading(false));
  };
  return (
    <article>
      <h1>ADVICE #{advice.id}</h1>
      <blockquote>{advice.body}</blockquote>
      <button
        disabled={isLoading}
        className={isLoading ? "loading" : ""}
        onClick={handleClick}
      >
        Кнопка
      </button>
    </article>
  );
};

export default Card;
