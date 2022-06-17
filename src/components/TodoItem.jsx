import React from "react";
import "../styles.css";
import Card from "./shared/Card";
import Button from "./shared/Button";

const TodoItem = (props) => {
  const inStyle = {
    backgroundColor: "red"
  };
  return (
    <div className="todo-item" style={props.bool && inStyle} draggable="true">
      <Card>
        <div className="todo-display">
          <label> Task : </label> {props.item.text}
        </div>
        <div className="todo-display">
          <label> Date: </label> {props.item.date}
        </div>
        <div className="todo-display">
          <label> Rating: </label> {props.item.rating}
        </div>
        <div className="todo-message">
          {" "}
          <p className="text-align">
            {" "}
            {props.bool ? "Task is Overdue" : "You're a Champion!"}
          </p>
        </div>

        {/* pass in specific item id into handleDelete'*/}
        <Button
          onClick={() => props.handleDelete(props.item.id)}
          text="I'm Done!"
          class="btn btn-complete"
        />
      </Card>
    </div>
  );
};

export default TodoItem;
