export const setCell = ({ num, currentPlayer, nextPlayer }) => {
  return {
    type: "SET_CELL",
    payload: { num, currentPlayer, nextPlayer },
  };
};

export const setWinner = (winner) => {
  return {
    type: "SET_WINNER",
    payload: winner,
  };
};

export const restartGame = () => {
  return {
    type: "RESTART_GAME",
  };
};
