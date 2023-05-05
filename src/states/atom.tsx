import { atom } from "recoil";
import { v4 } from "uuid";

export const TodoIconPositionState = atom({
  key: `todoIconPositionState${v4()}`,
  default: [0, 0],
});

export const MessengerIconPositionState = atom({
  key: `messengerIconPositionState${v4()}`,
  default: [0, 0],
});

export const TodoPagePositionState = atom({
  key: `todoPagePositionState${v4()}`,
  default: [0, 0],
});

export const MessengerPagePositionState = atom({
  key: `messengerPagePositionState${v4()}`,
  default: [0, 0],
});

export const ChatPagePositionState = atom({
  key: `chatPagePositionState${v4()}`,
  default: [0, 0],
});

export const clickedIconState = atom<string>({
  key: `clickedIconState${v4()}`,
  default: "",
});

export const todoOpenState = atom<boolean>({
  key: `todoOpenState${v4()}`,
  default: false,
});

export const messengerOpenState = atom<boolean>({
  key: `messengerOpenState${v4()}`,
  default: false,
});

export const priorityState = atom<string[]>({
  key: `priorityState${v4()}`,
  default: ["TODO_PAGE", "MESSENGER_PAGE", "CHAT_PAGE"],
});

export const selectedTagState = atom<
  "red" | "blue" | "orange" | "yellow" | "green" | "purple"
>({
  key: `selectedTagState${v4()}`,
  default: "red",
});

export const allListState = atom({
  key: `allListState${v4()}`,
  default: JSON.parse(localStorage.getItem("todoList") || "null") ?? [],
});

export const currentTabState = atom({
  key: `currentTabState${v4()}`,
  default: 0,
});

export const searchValueState = atom({
  key: `searchValueState${v4()}`,
  default: "",
});
