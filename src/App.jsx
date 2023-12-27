import React from "react";
import Task from "./TASK/Task";
import Taskabout from "./TASK/Taskabout";
import Card from "./Card/Card";
import Input from "./USERS/Input";

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
        <Input />
        {taskarray.map((obj) => (
          <Task key={obj.task} name={obj.task} />
        ))}
      </Card>
    </>
  );
};

export default App;
