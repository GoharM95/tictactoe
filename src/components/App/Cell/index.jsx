import React from "react";
import "./Cell.css";

class Cell extends React.Component {
  render() {
    const { num, handleClick, cells } = this.props;
    return (
      <td
        onClick={() => {
          handleClick(num);
        }}
      >
        {cells[num]}
      </td>
    );
  }
}

export default Cell;
