import React from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

const TaskAutofill = (props) => {
  return (
    <div className="container">
      <div className="autofill-options text-align">
        <div className="option option-1">
          <label> 1st: </label>
          <Button
            onClick={() => props.autofillTextHandler(props.optionOneText)}
            type="button"
            class="btn btn-autofill"
            disabled="false"
            text={props.optionOneText}
          />
        </div>
        <div className="option option-2">
          <label> 2nd: </label>
          <Button
            onClick={() => props.autofillTextHandler(props.optionTwoText)}
            type="button"
            class="btn btn-autofill"
            disabled="false"
            text={props.optionTwoText}
          />
        </div>
        <div className="option option-3">
          <label> 3rd: </label>
          <Button
            onClick={() => props.autofillTextHandler(props.optionThreeText)}
            type="button"
            class="btn btn-autofill"
            disabled="false"
            text={props.optionThreeText}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskAutofill;
