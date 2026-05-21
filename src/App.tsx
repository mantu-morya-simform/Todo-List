import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TodoInput from "./components/Input/TodoInput";
import Progress from "./components/Progress/Progress";
import TodoList from "./components/Todo/TodoList";
import type { ItemType } from "./types/ItemType";
import {
  loadTodos,
  saveTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  getCompletedCount,
} from "./Utill/TodoData";

function App() {
  const [todos, setTodos] = useState<ItemType[]>(() => loadTodos());

  console.log("helloo");
  // save to localStorage whenever todos change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (title: string) => {
    setTodos((prev) => addTodo(prev, title));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => deleteTodo(prev, id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) => toggleTodo(prev, id));
  };

  const handleEditTodo = (id: number, newTitle: string) => {
    setTodos((prev) => editTodo(prev, id, newTitle));
  };

  const completedCount = getCompletedCount(todos);

  return (
    <>
      <Header />
      <Progress completedCount={completedCount} totalCount={todos.length} />
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
