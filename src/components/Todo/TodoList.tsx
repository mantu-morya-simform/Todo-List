import TodoItem from "./TodoItem";
import "./Todo.css";
import type { ItemType } from "../../types/ItemType";

type TodoListProps = {
  todos: ItemType[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, newTitle: string) => void;
};

const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}: TodoListProps) => {
  return (
    <div className="todo__list">
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          item={task}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
