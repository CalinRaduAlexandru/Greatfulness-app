import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm/TodoForm";
import Quotes from "./Components/Quotes/Quotes";

const TODO_STORAGE_KEY = "todo-storage-key";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      task: "That you are here to see this app",
      completed: false,
      highlighted: false,
    },
    {
      id: "2",
      task: "That we might collaborate",
      completed: false,
      highlighted: false,
    },
    {
      id: "3",
      task: "For being a better programmer each day",
      completed: false,
      highlighted: false,
    },
  ]);

  useEffect(() => {
    const storageGratefulList = JSON.parse(
      localStorage.getItem(TODO_STORAGE_KEY)
    );
    if (storageGratefulList) setTodos(storageGratefulList);
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function crossCompleteTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function highlightTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            highlighted: !todo.highlighted,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="form-todo-list">
          <div className="todo-container">
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              crossCompleteTodo={crossCompleteTodo}
              highlightTodo={highlightTodo}
            />
          </div>
        </div>
        <div className="disc1"></div>
        <div className="disc2"></div>
        <div className="disc3"></div>
        <div className="landscape1"></div>
        <div className="landscape2"></div>
        <div className="landscape3"></div>
        <div className="landscape4">
          <div className="add-form">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
        <div className="tree1"></div>
        <div className="tree2"></div>
        <div className="tree3"></div>
        <div className="tree4"></div>
        <div className="tree5"></div>
        <div className="tree6"></div>
        <div className="star s1" id="animate"></div>
        <div className="star s2"></div>
        <div className="star s3"></div>
        <div className="star s4"></div>
        <div className="star s5"></div>
        <div className="star s6" id="animate"></div>
        <div className="star s7"></div>
        <div className="star s8"></div>
        <div className="star s9" id="animate"></div>
        <div className="star s10"></div>
        <div className="shootingstar"></div>
        <div className="shootingstar2"></div>
      </div>
      <div className="quotes">
        <Quotes />
      </div>
    </div>
  );
}

export default App;
