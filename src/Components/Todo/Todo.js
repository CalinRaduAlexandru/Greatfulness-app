import React from "react";
import "./Todo.styles.css";
import Checkbox from "@material-ui/core/Checkbox";

function Todo({ todo, deleteTodo, crossCompleteTodo, highlightTodo }) {
  function handleDeleteTodo() {
    deleteTodo(todo.id);
  }

  function handleCrossCompleteTodo() {
    crossCompleteTodo(todo.id);
  }

  function handleHighlightTodo() {
    highlightTodo(todo.id);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Checkbox
        color="primary"
        checked={todo.completed}
        type="checkbox"
        onClick={handleCrossCompleteTodo}
      />
      <div className="task-container">
        <p
          className="todo-text"
          style={{
            textDecoration: todo.completed ? "underline" : null,
            backgroundColor: todo.highlighted
              ? "rgba(255, 255, 255, 0.35"
              : null,
          }}
        >
          {todo.task}
        </p>
      </div>
      <button className="x-button" onClick={handleDeleteTodo}>
        &#10008;
      </button>
      <button className="highlight" onClick={handleHighlightTodo}>
        Highlight
      </button>
    </div>
  );
}

export default Todo;
