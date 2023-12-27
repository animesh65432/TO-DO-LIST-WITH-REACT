// Input.jsx
import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const submit_the_form = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("PLEASE PUT YOUR WORK INSINDE THE FROM");
    } else {
      props.add_data_from_user({ task: name });
      setName("");
    }
  };

  return (
    <form onSubmit={submit_the_form}>
      <input
        type="text"
        placeholder="Please put your work"
        value={name}
        onChange={handleNameChange}
      />
      <button className="button" type="submit">
        ADD-THE-WORK
      </button>
    </form>
  );
};

export default Input;
