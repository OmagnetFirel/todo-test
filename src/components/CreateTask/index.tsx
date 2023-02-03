import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./index.scss";

function CriarTarefa() {
  const createTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.elements[0].value;
    e.currentTarget.elements[0].value = "";
    const todo = {
      title,
      completed: false,
    };
    await addDoc(collection(db, "todos"), todo);    
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => createTodo(e)}>
        <input type="text" placeholder="Adicionar tarefa" required/>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default CriarTarefa;
