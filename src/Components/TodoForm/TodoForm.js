import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./TodoForm.styles.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    highlighted: false,
  });

  function handleChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleAddTodo(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px 10px",
      }}
    >
      <TextField
        placeholder="What are you greatful for?"
        type="text"
        onChange={handleChange}
        value={todo.task}
      />
      <AddCircleIcon
        onClick={handleAddTodo}
        style={{ fontSize: 30 }}
        className="circle-icon"
      />
    </div>
  );
}

export default TodoForm;
