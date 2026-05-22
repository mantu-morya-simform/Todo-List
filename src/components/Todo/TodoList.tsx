import type { ItemType } from "../../types/ItemType";
import TodoItem from "./TodoItem";
import "./Todo.css";
import {
  getSpecificTodoData,
  getTodoData,
  updateTodoData,
} from "../../Utill/TodoData";

const TodoList = () => {
  function handleCompleteToggle(id: number) {
    const completedTask = getSpecificTodoData(id);
    const allData = getTodoData();
    const removeSelectedData: ItemType[] =
      allData.filter((data) => data.id !== completedTask.id) || [];

    updateTodoData(
      {
        ...completedTask,
        completed: !completedTask.completed,
      },
      removeSelectedData,
    );
  }

  return (
    <div className="todo__list">
      {getTodoData().map((task: ItemType) => (
        <TodoItem key={task.id} item={task} onComplete={handleCompleteToggle} />
      ))}
    </div>
  );
};

export default TodoList;
