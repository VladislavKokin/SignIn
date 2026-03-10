import { InformationLayout } from "./InformationLayout";

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};