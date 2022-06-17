import "./styles.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Route, Switch, Router } from "react-router-dom";
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoNumber from "./components/TodoNumber.jsx";
import TodoData from "./components/data/TodoData.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import handleClick from "./components/controllers/gapi.js";
import compare from "./components/controllers/Compare.js";
import PopupDelete from "./components/shared/PopupDelete";
import PopupRemove from "./components/shared/PopupRemove";

export default function App() {
  const [openDelete, setOpenDelete] = useState(false);
  // const [openRemove, setOpenRemove] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [todos, setTodos] = useState(
    TodoData /*JSON.parse(localStorage.getItem("todos"))*/
  );

  /* Persistent State saved in local storage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos].sort(compare));
  };

  const deleteTodo = (id) => {
    setOpenRemove(true); // triggers opening of first prompt
    removeTask(id); // execute task removal
    // Add condition to only set true if button is presed
    // setOpenDelete(true); // after task is removed, then show this;
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setOpenDelete(false);
    document.body.style.overflow = "unset";
  };

  // return button on delete task option
  const hideModalRemove = () => {
    setOpenRemove(false);
  };

  // after clicking remove task, you will delete the item,
  // then close the prompt
  // then remove the stuck scrolling
  const removeTask = (id) => {
    // removes the task
    setTodos(todos.filter((item) => item.id !== id));
    // closes the prompt
    setOpenRemove(false);
    // then opens the deleted prompt
    setOpenDelete(true);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Header text="To-do List" />
      <div className="container">
        {/* <Switch>
            <Route exact path="/Form"> */}
        <TodoForm todoList={todos} handleAdd={addTodo} />
        {/* </Route>
          </Switch> */}
        {/* <Button onClick={handleClick} class="btn" /> */}
        <TodoNumber todoList={todos} />
        <Todo todoList={todos} handleDelete={deleteTodo} />
        {openRemove && (
          <PopupRemove
            openRemove={openRemove}
            hideModalRemove={hideModalRemove}
            removeTask={removeTask}
          />
        )}
        {openDelete && (
          <PopupDelete openDelete={openDelete} hideModal={hideModal} />
        )}
      </div>
      <Footer person="Kervyn" />
    </>
  );
}
