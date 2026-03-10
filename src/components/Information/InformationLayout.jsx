import "../styles.modules.css"

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
    let resultGame = "";

    if (isDraw) {
        resultGame = "Ничья";
    } else if (isGameEnded) {
        resultGame = `Победа ${currentPlayer}`;
    } else {
        resultGame = `Ходит ${currentPlayer}`;
    }

    return <div className="header">{resultGame}</div>
};