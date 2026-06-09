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

  const completedCount = getCompletedCount(todos);

  return (
    <>
      <Header />
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
