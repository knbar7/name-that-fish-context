import "./styles/game-board.css";
import React, { useState } from "react";
import { useFish } from "../app.context"



// ! Do not add props to gameboard
export const GameBoard = () => {
  const { handleAnswer, initialFishes, fishIndex } = useFish();
  const [answer, setAnswer] = useState("");

  const changeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleAnswer(answer);
    setAnswer('');
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[fishIndex] ? initialFishes[fishIndex].url : null} alt={initialFishes[fishIndex] ? initialFishes[fishIndex].name : null} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={answer}
          onChange={changeAnswer} // Use the changeAnswer function to update the answer
        />
        <input type="submit" />
      </form>
    </div>
  );
};
