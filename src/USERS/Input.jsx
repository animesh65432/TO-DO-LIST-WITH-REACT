import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const submit_the_from = (event) => {
    event.preventDefault();
    setName("");
  };

  return (
    <form onSubmit={submit_the_from}>
      <input
        type="text"
        placeholder="Please put your work"
        value={name}
        onChange={handleNameChange}
      />
      <button className="button">ADD-THE-WORK</button>
    </form>
  );
};

export default Input;
