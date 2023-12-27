import React from "react";
import "./Task.css";

const Task = (props) => {
  const { name } = props;
  const work = name.toUpperCase();

  const done_the_work = (event) => {
    const parent_element = event.target.parentElement.parentElement;
    parent_element.remove();
  };

  return (
    <div className="task-item">
      {work}
      <div className="task-item__description">
        <button className="button" onClick={done_the_work}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Task;
