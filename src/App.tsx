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
import Filter from "./components/Filter/Filter";

function App() {
  const [todos, setTodos] = useState<ItemType[]>(() => loadTodos());
  const [filteredTodos, setFilteredTodos] = useState<ItemType[]>(todos);
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return "light"; // in case if i didn't find any them from LocalStorage
  });

  // Apply theme to body on mount
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${mode}-theme`);
    localStorage.setItem("theme", mode);
  }, [mode]);

  useEffect(() => {
    saveTodos(todos);
    setFilteredTodos(todos);
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

  const handleModeClick = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const completedCount = getCompletedCount(todos);

  return (
    <>
      <Header mode={mode} handleModeClick={handleModeClick} />
      <Progress completedCount={completedCount} totalCount={todos.length} />
      <TodoInput onAddTodo={handleAddTodo} />
      <Filter todos={todos} onFilterChange={setFilteredTodos} />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
