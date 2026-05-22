import "./Todo.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import type { ItemType } from "../../types/ItemType";
import type React from "react";
import { useState } from "react";

type TodoItemProps = {
  item: ItemType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

const TodoItem = ({ item, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.title);

  // if (item && item.completed) {
  //   target.parentElement?.classList.toggle("task__name__completed");
  // }

  const handleToggleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLParagraphElement)) return;
    target.classList.toggle("select");
    onToggle(item.id);
    target.parentElement?.classList.toggle("task__name__completed");
    console.log(target.parentElement);
  };

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() !== "") {
      onEdit(item.id, editValue);
    } else {
      setEditValue(item.title);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditValue(item.title);
    setIsEditing(false);
  };

  return (
    <div className="todo__item">
      <div className="task__name">
        <p onClick={handleToggleClick} className="toggle"></p>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <p
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.title}
          </p>
        )}
      </div>
      <div className="task__utility">
        {isEditing ? (
          <>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <FaRegEdit
              color="white"
              size={30}
              onClick={handleEditClick}
              style={{ cursor: "pointer" }}
            />
            <RiDeleteBinLine
              color="white"
              size={30}
              onClick={handleDeleteClick}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
