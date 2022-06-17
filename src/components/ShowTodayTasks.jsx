import React from "react";
import Button from "./shared/Button";

const ShowTodayTasks = (props) => {
  return (
    <div className="container text-align">
      <Button
        class="btn btn-showToday"
        onClick={props.onClick}
        disabled="false"
        type="button"
        text="Show Today"
      />
    </div>
  );
};

export default ShowTodayTasks;
