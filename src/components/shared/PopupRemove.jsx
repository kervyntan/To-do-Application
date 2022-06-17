import React, { useState, useRef } from "react";
import Button from "./Button";

const PopupRemove = (props) => {
  return (
    <>
      {props.openRemove && (
        <div className="flex-col modal-main text-align">
          <p> Do you want to delete this task? </p>
          <Button
            text="Return"
            onClick={props.hideModalRemove}
            class="btn btn-modal"
          />

          <Button
            text="Delete"
            onClick={props.removeTask}
            class="btn btn-delete-task"
          />
        </div>
      )}
    </>
  );
};

export default PopupRemove;
