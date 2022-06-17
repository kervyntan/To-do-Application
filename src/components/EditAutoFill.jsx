import React, { useState, useEffect } from "react";
import Button from "./shared/Button";
import { textChange } from "./TaskAutofill";

const EditAutoFill = (props) => {
  const [textOne, setTextOne] = useState("");
  const [textSecond, setTextSecond] = useState("");
  const [textThird, setTextThird] = useState("");

  const textBtn = "Change 1st";
  const textBtnSecond = "Change 2nd";
  const textBtnThird = "Change 3rd";

  const arr = [textOne, textSecond, textThird];

  const textInputHandler = (e) => {
    setTextOne(e.target.value);
  };

  const textInputHandlerSecond = (e) => {
    setTextSecond(e.target.value);
  };

  const textInputHandlerThird = (e) => {
    setTextThird(e.target.value);
  };

  return (
    <>
      <form>
        <div className="option-1">
          <input
            type="text"
            placeholder="First Option"
            onChange={textInputHandler}
            value={textOne}
          />
          <Button
            onClick={() => props.textChangeHandler(0, arr[0])}
            class="btn btn-change-autofill"
            text={textBtn}
            disabled="false"
          />
        </div>
        <div className="option-2">
          <input
            type="text"
            placeholder="Second Option"
            onChange={textInputHandlerSecond}
            value={textSecond}
          />
          <Button
            onClick={() => props.textChangeHandler(1, arr[1])}
            class="btn btn-change-autofill"
            text={textBtnSecond}
            disabled="false"
          />
        </div>
        <div className="option-3">
          <input
            type="text"
            placeholder="Third Option"
            onChange={textInputHandlerThird}
            value={textThird}
          />
          <Button
            onClick={() => props.textChangeHandler(2, arr[2])}
            class="btn btn-change-autofill"
            text={textBtnThird}
            disabled="false"
          />
        </div>
      </form>
    </>
  );
};

export default EditAutoFill;
