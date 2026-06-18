import type { ItemType } from "../types/ItemType";

const completedTodoData = (data: ItemType[]): ItemType[] => {
  return data.filter((todo) => todo.completed === true);
};

export default completedTodoData;
