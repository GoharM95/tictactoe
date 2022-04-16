import React from "react";
import "./Cell.css";

class Cell extends React.Component {
  render() {
    const { num, handleClick, cellValue } = this.props;
    return (
      <td
        onClick={() => {
          handleClick(num);
        }}
      >
        {cellValue}
      </td>
    );
  }
}

export default Cell;
