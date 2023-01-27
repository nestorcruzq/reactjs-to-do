import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }

  function completeTodo(todo) {
    if (completedTodos.includes(todo)) {
      setCompletedTodos(completedTodos.filter((t) => t !== todo));
      setTodos([...todos, todo]);
    } else {
      setTodos(todos.filter((t) => t !== todo));
      setCompletedTodos([...completedTodos, todo]);
    }
  }

  function deleteTodo(todo) {
    setTodos(todos.filter((t) => t !== todo));
    setCompletedTodos(completedTodos.filter((t) => t !== todo));
  }

  return (
    <div className="container">
        <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add" type="submit">Add Todo</button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => (
            <>
              <li
                key={index}
                className={completedTodos.includes(todo) ? "completed" : ""}
              >
                <input
                  type="checkbox"
                  checked={completedTodos.includes(todo)}
                  onChange={() => completeTodo(todo)}
                />
                {todo} <button className="delete" onClick={() => deleteTodo(todo)}>Delete</button>{" "}
              </li>
            </>
          ))}
        </ul>
      )}
      {completedTodos.length > 0 && (
        <ul>
          {completedTodos.map((todo, index) => (
            <>
              <li
                key={index}
                className={completedTodos.includes(todo) ? "completed" : ""}
              >
                <input
                  type="checkbox"
                  checked={completedTodos.includes(todo)}
                  onChange={() => completeTodo(todo)}
                />
                {todo} <button className="delete" onClick={() => deleteTodo(todo)}>Delete</button>{" "}
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
