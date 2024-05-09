import { useState } from "react";
import styles from "./form.module.css";
export function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.innerContainer}>
        <input
          className={styles.morderninput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="enter to do item"
        />
        <button className={styles.mordernButton} type="todo">
          Add Todo
        </button>
      </div>
    </form>
  );
}
