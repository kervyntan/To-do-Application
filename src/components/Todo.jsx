import React, { useState } from "react";
import uuid from "react-uuid";
import "../styles.css";
import refresh from "./refresh.png";
import TodoItem from "./TodoItem.jsx";
import DateChecker from "./controllers/DateChecker";
import ShowTodayTasks from "./ShowTodayTasks";

const Todo = ({ todoList, handleDelete }) => {
  const bool = true;
  const [showToday, setShowToday] = useState(false);

  if (!todoList || todoList.length === 0) {
    return <h3 className="text-align done-text">Your To-do List is empty.</h3>;
  }

  const todoLoop = (item) => {
    const currentItemDate = new Date(item.date);
    const currentTime = new Date();
    if (currentTime.getTime() > currentItemDate.getTime()) {
      return (
        <TodoItem
          key={uuid()}
          item={item}
          handleDelete={handleDelete}
          bool={bool}
        />
      );
    } else {
      return <TodoItem key={uuid()} item={item} handleDelete={handleDelete} />;
    }
  };

  const showTodayTodoLoop = () => {
    setShowToday(true);
  };

  DateChecker();
  // console.log(todoList);
  // console.log(todoList.filter(DateChecker));

  return (
    <div className="List">
      <ShowTodayTasks onClick={showTodayTodoLoop} />
      {showToday ? (
        <div className="todo-list">{todoList.map(todoLoop)}</div>
      ) : (
        <div className="todo-list">{todoList.map(todoLoop)}</div>
      )}
    </div>
  );
};

export default Todo;
