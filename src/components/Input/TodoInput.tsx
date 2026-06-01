import { useState } from "react";
import "./Input.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

type TodoInputProps = {
  onAddTodo: (title: string) => void;
};

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  function handleClick() {
    if (!isNaN(Number(inputValue))) {
      alert("Cant Give Number As Todo");
      return;
    }
    onAddTodo(inputValue);
    setInputValue("");
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
