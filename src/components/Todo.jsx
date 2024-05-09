import { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { Footer } from "./Footer";
function Todo() {
  const [todos, setTodos] = useState([]);
  const completecount = todos.filter((todo) => todo.done).length;
  const total = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer count={completecount} total={total} />
    </div>
  );
}
export default Todo;
