import React from "react";
import Task from "./TASK/Task";
import Taskabout from "./TASK/Taskabout";
import Card from "./Card/Card";
import Input from "./USERS/Input";
import { useState } from "react";

const App = () => {
  const [taskarray, setUserArray] = useState([]);
  const the_data = (obj) => {
    setUserArray((prevArray) => [...prevArray, obj]);
  };

  return (
    <>
      <Card>
        <Taskabout />
        <Input add_data_from_user={the_data} />
        {taskarray.map((obj) => (
          <Task key={obj.task} name={obj.task} />
        ))}
      </Card>
    </>
  );
};

export default App;
