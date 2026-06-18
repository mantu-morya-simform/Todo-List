import type { ItemType } from "../types/ItemType";

const pendingTodoData = (data: ItemType[]): ItemType[] => {
  return data.filter((todo) => todo.completed !== true);
};

export default pendingTodoData;
