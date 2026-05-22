import type { ItemType } from "../types/ItemType";

// load todos from localStorage
export function loadTodos(): ItemType[] {
  const saved = localStorage.getItem("todo-data");
  return saved ? JSON.parse(saved) : [];
}

// save todos to localStorage
export function saveTodos(todos: ItemType[]): void {
  localStorage.setItem("todo-data", JSON.stringify(todos));
}

// create a new todo object
export function createNewTodo(title: string): ItemType {
  return {
    id: Date.now(),
    title: title.trim(),
    completed: false,
  };
}

// add a new todo
export function addTodo(todos: ItemType[], title: string): ItemType[] {
  if (title.trim() === "") return todos;
  const newTodo = createNewTodo(title);
  return [...todos, newTodo];
}

// delete a todo
export function deleteTodo(todos: ItemType[], id: number): ItemType[] {
  return todos.filter((todo) => todo.id !== id);
}

// toggle todo completion status
export function toggleTodo(todos: ItemType[], id: number): ItemType[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
}

// edit todo title
export function editTodo(
  todos: ItemType[],
  id: number,
  newTitle: string,
): ItemType[] {
  if (newTitle.trim() === "") return todos;
  return todos.map((todo) =>
    todo.id === id ? { ...todo, title: newTitle.trim() } : todo,
  );
}

// get completed todos count
export function getCompletedCount(todos: ItemType[]): number {
  return todos.filter((todo) => todo.completed).length;
}
