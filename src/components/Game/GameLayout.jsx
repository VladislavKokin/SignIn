import { Field } from '../Field/Field';
import { Information } from "../Information/Information";

export const GameLayout = ({field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  onRestart,
}) => {
  return (
    <div>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
      />
      <div className="onRestart">
        <button onClick={onRestart}>Начать заново</button>
      </div>
    </div>
  );
};
export default GameLayout;