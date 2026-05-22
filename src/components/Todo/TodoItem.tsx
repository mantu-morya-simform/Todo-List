import "./Todo.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import type { ItemType } from "../../types/ItemType";
import type React from "react";
import { deleteTodoData } from "../../Utill/TodoData";

type TodoItemProps = {
  item: ItemType;
  onComplete: (id: number) => void;
};

const TodoItem = ({ item, onComplete }: TodoItemProps) => {
  const handleToggleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLParagraphElement)) return;
    target.classList.toggle("select");
    onComplete(item.id);
    target.parentElement.classList.toggle("task__name__completed");
  };

  function handleDeleteClick() {
    deleteTodoData(item.id);
  }

  function handleEditClick(e) {
    console.log(e.target.parentElement);
  }

  return (
    <div className="todo__item">
      <div className="task__name">
        <p onClick={handleToggleClick} className="toggle"></p>
        {item.title}
      </div>
      <div className="task__utility">
        <FaRegEdit color="white" size={30} onClick={handleEditClick} />
        <RiDeleteBinLine color="white" size={30} onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default TodoItem;
