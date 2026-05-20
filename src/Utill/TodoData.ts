import type { ItemType } from "../types/ItemType";

export function getTodoData(): ItemType[] {
  const data: ItemType[] = JSON.parse(localStorage.getItem("todo-data")) || [];
  return data;
}

export function setTododata(newData: ItemType) {
  const oldData = getTodoData();
  const newDataToSet = [...oldData, newData];
  localStorage.setItem("todo-data", JSON.stringify(newDataToSet));
}

export function deleteTodoData(id: number) {
  const allData = getTodoData();
  const newData = allData.filter((data) => data.id !== id);
  localStorage.setItem("todo-data", JSON.stringify(newData));
}
export function updateTodoData(newData: ItemType, oldData: ItemType[]) {
  const newDataToSet = [...oldData, newData];
  localStorage.setItem("todo-data", JSON.stringify(newDataToSet));
}

export function getSpecificTodoData(id: number): ItemType {
  return getTodoData().find((data) => data.id === id);
}
