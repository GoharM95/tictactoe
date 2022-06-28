import React from "react";
import "./Cell.css";
import { connect } from "react-redux";
import { setCell } from "../../../store/actions";

class Cell extends React.Component {
  render() {
    const { num, setCell, cellValue, turn } = this.props;
    const nextPlayer = turn === "x" ? "o" : "x";
    return (
      <td
        onClick={() => {
          setCell({
            num,
            currentPlayer: turn,
            nextPlayer,
          });
        }}
      >
        {cellValue}
      </td>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCell: ({ num, currentPlayer, nextPlayer }) => {
      const action = setCell({ num, currentPlayer, nextPlayer });
      dispatch(action);
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    cellValue: state.cells[ownProps.num],
    turn: state.turn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
