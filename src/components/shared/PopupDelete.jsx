import React, { useState } from "react";
import Button from "./Button.jsx";

const PopupDelete = (props) => {
  return (
    <>
      {props.openDelete && (
        <div className="flex-col modal-main text-align">
          <p> Task has been removed! </p>
          <Button
            text="Close & Continue"
            onClick={props.hideModal}
            class="btn btn-modal"
          />
        </div>
      )}
    </>
  );
};

export default PopupDelete;
