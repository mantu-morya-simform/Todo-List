import { useState } from "react";
import "./Input.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import type { ItemType } from "../../types/ItemType";
import { setTododata } from "../../Utill/TodoData";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  function handleClick() {
    if (inputValue.trim() === "") return;
    const data: ItemType = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    setTododata(data);
    setInputValue("");
    // Trigger storage event for other components
    window.dispatchEvent(new Event("storage"));
  }
  return (
    <div className="todo__input">
      <input
        className="task__input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write your next Task"
      />
      <button className="add__icon__outer" onClick={handleClick}>
        <BiSolidMessageSquareAdd color="black" size={40} />
      </button>
    </div>
  );
};

export default TodoInput;
