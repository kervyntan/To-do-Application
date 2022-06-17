import React from "react";
import { useState } from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.isDisabled}
      className={props.class}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  isDisabled: false
};

export default Button;
