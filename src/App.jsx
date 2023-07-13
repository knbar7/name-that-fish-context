import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { FinalScore } from "./Components/FinalScore";
import { useFish } from "./app.context";

function App() {
  const { showFinalScore } = useFish();
  return (
    <>
      { showFinalScore ?
        <FinalScore />
        :
        <>
          <div className="App">
            <header>
              <ScoreBoard />
              <GameBoard />
            </header>
          </div>
        </>
      }
    </>
  );
}

export default App;
