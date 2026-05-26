import "./Todo.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import type { ItemType } from "../../types/ItemType";
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

  const handleToggleClick = () => {
    onToggle(item.id);
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
      <div
        className={`task__name ${
          item.completed ? "task__name__completed" : ""
        }`}
      >
        <p
          onClick={!isEditing ? handleToggleClick : undefined}
          className="toggle"
        ></p>
        {isEditing ? (
          <input
            className="edit__input"
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <p className={item.completed ? "completed__text" : ""}>
            {item.title}
          </p>
        )}
      </div>
      <div className="task__utility">
        {isEditing ? (
          <>
            <button className="save__btn" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="cancel__btn" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <FaRegEdit
              className="todo__icon"
              color="white"
              onClick={handleEditClick}
            />
            <RiDeleteBinLine
              className="todo__icon"
              onClick={handleDeleteClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
