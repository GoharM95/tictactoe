import React from "react";
import "./App.css";
import Cell from "./Cell";
import { connect } from "react-redux";
import { setWinner, restartGame, setDraw } from "../../store/actions";

class App extends React.Component {
  checkForTheWinner = (cells) => {
    const winningCombos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in winningCombos) {
      const winner = winningCombos[combo].find((pattern) => {
        if (
          cells[pattern[0]] === cells[pattern[1]] &&
          cells[pattern[1]] === cells[pattern[2]] &&
          cells[pattern[0]] !== ""
        ) {
          return true;
        }
      });
      if (winner) {
        return cells[winner[0]];
      }
    }
  };

  checkForTheDraw(cells) {
    const { setDraw } = this.props;
    const isDraw = cells.find((cell) => {
      if (cell === "") {
        return true;
      }
    });

    if (!isDraw && isDraw !== "") {
      setDraw(true);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { turn, cells, winner, setWinner, isDraw } = this.props;

    if (prevProps.winner !== winner && winner) {
      alert(`winner is ${winner}`);
    }

    this.checkForTheDraw(cells);
    if (prevProps.isDraw !== isDraw) {
      alert("It's a draw!");
    }

    if (prevProps.turn !== turn) {
      const newWinner = this.checkForTheWinner(cells);
      if (newWinner) {
        setWinner(newWinner);
      }
    }
  }

  render() {
    const { winner, isDraw } = this.props;
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        {winner && (
          <div className="winner">
            <p>{winner} is the winner!</p>
            <button onClick={() => this.props.restartGame()}>
              Play Again!
            </button>
          </div>
        )}
        {isDraw && (
          <div className="draw">
            <button onClick={() => this.props.restartGame()}>
              Play Again!
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    winner: state.winner,
    cells: state.cells,
    isDraw: state.isDraw,
  };
};

export default connect(mapStateToProps, { setWinner, restartGame, setDraw })(
  App
);
