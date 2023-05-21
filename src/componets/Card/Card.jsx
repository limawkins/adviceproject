import React, { useEffect, useState } from "react";
import "./Card.css";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";
import { ReactComponent as DiceIcon } from "../../assets/dice.svg";
import classNames from "classnames";
const Card = () => {
  // https://api.adviceslip.com/advice
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState({ id: 1, body: 1 });
  useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = () => {
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
      <h1>#{advice.id}</h1>
      <blockquote>{advice.body}</blockquote>
      <div className="decoration">
        <span className="line"></span>
        <div className="icon">
          <PauseIcon />
        </div>
        <span className="line"></span>
      </div>
      <button
        disabled={isLoading}
        className={classNames(
          {
            loading: isLoading,
          },
          "button"
        )}
        onClick={fetchAdvice}
      >
        <DiceIcon />
      </button>
    </article>
  );
};

export default Card;
