import React from "react";
import Todo from "./Todo/Todo";

function TodoList({ todos, deleteTodo, crossCompleteTodo, highlightTodo }) {
  return (
    <div>
      {todos.reverse().map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            crossCompleteTodo={crossCompleteTodo}
            highlightTodo={highlightTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
