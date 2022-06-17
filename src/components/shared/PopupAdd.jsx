import React, { useState } from "react";
import Button from "./Button.jsx";

const PopupAdd = (props) => {
  return (
    <>
      {props.open && (
        <div className="flex-col modal-main text-align">
          <p> Task has been added! </p>
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

export default PopupAdd;
