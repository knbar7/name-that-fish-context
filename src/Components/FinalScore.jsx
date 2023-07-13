import React from "react";
import { useFish } from "../app.context"

// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correctCount, totalCount } = useFish();
  return (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
  )
};
