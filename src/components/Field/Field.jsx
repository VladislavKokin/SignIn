import { FieldLayout } from "./FieldLayout";

  const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

export const Field = ({ field, setField, currentPlayer,setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw,}) => {
  const checkWinner = (field, player) => {
    return WIN_PATTERNS.some(([a, b, c]) => {
      return field[a] === player && field[b] === player && field[c] === player;
    });
  };

  const itemClike = (index) => {
    if (isGameEnded || field[index] !== "") {
      return;
    }
    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWinner(newField, currentPlayer)) {
      setIsGameEnded(true);
      return;
    }

    if (!newField.includes('')) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
  };

  return <FieldLayout field={field} onItemClick={itemClike} isGameEnded={isGameEnded} />
}