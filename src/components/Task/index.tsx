import React from "react";
import "./index.scss";
interface iTask {
  todo: TTodo;
  toggleComplete: (todo: TTodo) => void;
  removeTodo: (todo: TTodo) => void;
}

export type TTodo = {
  id: string;
  completed: boolean;
  title: string;
};

function Task(props: iTask) {
  const { todo, toggleComplete, removeTodo } = props;
  return (
    <li className={`taskWrapper ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed ? true : false}
        onChange={() => toggleComplete(todo)}
      />
      <span
        onClick={() => {
          toggleComplete(todo);
        }}
      >
        {todo.title}
      </span>
      <button
        onClick={() => {
          removeTodo(todo);
        }}
      >
        X
      </button>
    </li>
  );
}

export default Task;
