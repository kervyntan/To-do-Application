import React from "react";
import { useState } from "react";
import Button from "./shared/Button.jsx";
import Card from "./shared/Card.jsx";
import Todo from "./Todo.jsx";
import PopupAdd from "./shared/PopupAdd.jsx";
import RatingSelect from "./RatingSelect.jsx";
import TaskAutofill from "./TaskAutofill";
import EditAutoFill from "./EditAutoFill.jsx";

const TodoForm = (props) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [messageText, setMessageText] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  const [optionOneText, setOptionOneText] = useState("Work");
  const [optionTwoText, setOptionTwoText] = useState("School");
  const [optionThreeText, setOptionThreeText] = useState("Read");

  const textInputHandler = (e) => {
    setText(e.target.value);
  };

  const checkValidSubmission = () => {
    if (text === "" || date === "") {
      setBtnDisabled(true);
    } else if (text.trim().length < 10) {
      setBtnDisabled(true);
      setMessageText("Please type in more characters");
    } else {
      setBtnDisabled(false);
      setMessageText("");
    }
  };

  const dateInputHandler = (e) => {
    if (date === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setDate(e.target.value);
  };

  /* Form submission */

  const buttonClickHandler = (e) => {
    const newTodo = {
      id: props.todoList.length * 5,
      date: date,
      text: text,
      rating: rating
    };
    setText("");
    setDate("");
    setRating(1);
    e.preventDefault();

    let date1 = new Date(date);

    props.handleAdd(newTodo);
  };

  /* Modal controllers */

  const displayModalHandler = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  const autofillTextHandler = (text) => {
    // const textInput = document.getElementById("task-input");
    // textInput.value = text;
    setText(text);
  };

  const textChangeHandler = (option, text) => {
    if (option === 0) {
      setOptionOneText(text);
    } else if (option === 1) {
      setOptionTwoText(text);
    } else if (option === 2) {
      setOptionThreeText(text);
    }
  };
  return (
    <>
      <Card>
        <h3 className="todo-heading"> Add your task here: </h3>
        <form onChange={checkValidSubmission} onSubmit={buttonClickHandler}>
          <div className="todoform">
            <div className="input-form">
              <label> Task : </label>
              <input
                onChange={textInputHandler}
                type="text"
                placeholder="Input Task!"
                value={text}
                id="task-input"
              />
            </div>

            <TaskAutofill
              autofillTextHandler={autofillTextHandler}
              optionOneText={optionOneText}
              optionTwoText={optionTwoText}
              optionThreeText={optionThreeText}
            />

            <div className="input-form">
              <label> Due Date: </label>
              <input type="date" value={date} onChange={dateInputHandler} />
            </div>
            <div className="input-form-rating">
              <label> Rating (Importance): </label>
              <RatingSelect select={setRating} selected={rating} />
            </div>
            <Button
              type="submit"
              onClick={displayModalHandler}
              text="Add"
              isDisabled={btnDisabled}
              class="btn btn-submit"
            />
            {open && <PopupAdd open={open} hideModal={hideModal} />}
          </div>
        </form>
        <div className="message text-align"> {messageText} </div>
      </Card>

      <EditAutoFill text={text} textChangeHandler={textChangeHandler} />
    </>
  );
};

export default TodoForm;
