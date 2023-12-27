import React from "react";
import Task from "./TASK/Task";
import Taskabout from "./TASK/Taskabout";
import Card from "./Card/Card";

const App = () => {
  const taskarray = [
    {
      task: "dsa",
    },
    {
      task: "Devolopment",
    },
    {
      task: "workout",
    },
  ];

  return (
    <>
      <Card>
        <Taskabout />
        {taskarray.map((obj) => (
          <Task key={obj.task} name={obj.task} />
        ))}
      </Card>
    </>
  );
};

export default App;
