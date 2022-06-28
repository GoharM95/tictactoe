const initialState = { turn: "x", cells: Array(9).fill(""), winner: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CELL":
      const { num, currentPlayer, nextPlayer } = action.payload;
      const newCells = [...state.cells];
      newCells[num] = currentPlayer;
      const newState = { ...state, turn: nextPlayer, cells: newCells };
      return newState;
    case "SET_WINNER":
      const newWinnerState = { ...state, winner: action.payload };
      return newWinnerState;
    case "RESTART_GAME":
      const stateAfterRestart = {
        ...state,
        cells: Array(9).fill(""),
        winner: null,
      };
      return stateAfterRestart;
    default:
      return state;
  }
};

export default reducer;
