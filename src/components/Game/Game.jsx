import { useState } from "react";
import { GameLayout } from "./GameLayout";

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(['', '', '','', '', '','', '', '',]);

  const restartGame = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(['', '', '','', '', '','', '', '',]);
  };

  return (
    <GameLayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      onRestart={restartGame}
    />
  );
}