import { useState } from "react";
import type { ItemType } from "../../types/ItemType";
import completedTodoData from "../../Utill/CompletedTodoData";
import pendingTodoData from "../../Utill/PendingTodoData";
import "./Filter.css";

type FilterType = "all" | "pending" | "completed";

interface FilterProps {
  todos: ItemType[];
  onFilterChange: (filteredTodos: ItemType[]) => void;
}

const Filter = ({ todos, onFilterChange }: FilterProps) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);

    if (newFilter === "all") {
      onFilterChange(todos);
    } else if (newFilter === "pending") {
      onFilterChange(pendingTodoData(todos));
    } else if (newFilter === "completed") {
      onFilterChange(completedTodoData(todos));
    }
  };

  return (
    <div className="filter__container">
      <label className="label__radio">
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === "all"}
          onChange={() => handleFilterChange("all")}
        />
        All
      </label>
      <label className="label__radio">
        <input
          type="radio"
          name="filter"
          value="pending"
          checked={filter === "pending"}
          onChange={() => handleFilterChange("pending")}
        />
        Pending
      </label>
      <label className="label__radio">
        <input
          type="radio"
          name="filter"
          value="completed"
          checked={filter === "completed"}
          onChange={() => handleFilterChange("completed")}
        />
        Completed
      </label>
    </div>
  );
};

export default Filter;
