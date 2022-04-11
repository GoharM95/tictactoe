import React from "react";
import "./App.css";
import Cell from "./Cell";

class App extends React.Component {
  state = { turn: "", cells: Array(9).fill(""), winner: null };

  checkForTheWiiner = (squares) => {
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
      winningCombos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          this.setState({ winner: squares[pattern[0]] });
        }
      });
    }
  };

  handleClick = (num) => {
    const { turn, cells } = this.state;
    const squares = [...cells];

    if (turn === "") {
      squares[num] = "x";
      this.setState({ turn: "o" });
    } else {
      squares[num] = "o";
      this.setState({ turn: "" });
    }
    this.checkForTheWiiner(squares);
    this.setState({ cells: squares });
  };
  // one setState call

  handleRestart = () => {
    this.setState({ winner: null });
    this.setState({ cells: Array(9).fill("") });
  };

  render() {
    const { cells, winner } = this.state;
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
              <Cell cells={cells} handleClick={this.handleClick} num={0} />
              <Cell cells={cells} handleClick={this.handleClick} num={1} />
              <Cell cells={cells} handleClick={this.handleClick} num={2} />
            </tr>
            <tr>
              <Cell cells={cells} handleClick={this.handleClick} num={3} />
              <Cell cells={cells} handleClick={this.handleClick} num={4} />
              <Cell cells={cells} handleClick={this.handleClick} num={5} />
            </tr>
            <tr>
              <Cell cells={cells} handleClick={this.handleClick} num={6} />
              <Cell cells={cells} handleClick={this.handleClick} num={7} />
              <Cell cells={cells} handleClick={this.handleClick} num={8} />
            </tr>
          </tbody>
        </table>
        {winner && (
          <>
            <p>{winner} is the winner!</p>
            <button onClick={() => this.handleRestart()}>Play Again!</button>
          </>
        )}
      </div>
    );
  }
}

export default App;
