import React from "react";
import "../styles.css";

const TodoNumber = ({ todoList }) => {
  const inStyle = {
    fontWeight: "bold",
    color: "black"
  };

  const para = {
    color: "black",
    fontSize: 22,
    textAlign: "center"
  };
  return (
    <div className="todo">
      {todoList.length !== 0 && (
        <p style={para}>
          {" "}
          You have <span style={inStyle}>{todoList.length} </span> things to do
          today!{" "}
        </p>
      )}
    </div>
  );
};

export default TodoNumber;
