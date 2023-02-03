import React, { useState, useEffect } from "react";
import Task, { TTodo } from "../Task";
import { db } from "../../firebase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import "./index.scss";

function TaskList() {
  const [tasks, setTasks] = useState<TTodo[]>();

  useEffect(() => {
    const req = query(collection(db, "todos"));

    const unsubscribe = onSnapshot(req, (QuerySnapshot) => {
      const data = QuerySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        } as unknown as TTodo;
      });

      setTasks(data);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const toggleComplete = async (todo: TTodo) => {
    const todoRef = doc(db, "todos", todo.id);
    await updateDoc(todoRef, {
      completed: !todo.completed,
    });
  };

  const removeTodo = async (todo: TTodo) => {
    const todoRef = doc(db, "todos", todo.id);
    await deleteDoc(todoRef);
  };

  return (
    <ul className="taskList">
      {tasks?.map((tarefa: TTodo) => {
        return (
          <Task
            key={tarefa.id}
            todo={tarefa as TTodo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
