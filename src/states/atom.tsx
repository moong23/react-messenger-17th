import { atom } from "recoil";
import { v4 } from "uuid";

interface DragPosition {
  top: number;
  left: number;
}

export const TodoIconPositionState = atom<DragPosition>({
  key: `todoIconPositionState${v4()}`,
  default: JSON.parse(localStorage.getItem("iconPosition") || "null") ?? {
    top: 30,
    left: 30,
  },
});

export const MessengerIconPositionState = atom<DragPosition>({
  key: `messengerIconPositionState${v4()}`,
  default: JSON.parse(localStorage.getItem("iconPosition") || "null") ?? {
    top: 160,
    left: 30,
  },
});

export const TodoPagePositionState = atom<DragPosition>({
  key: `todoPagePositionState${v4()}`,
  default: JSON.parse(localStorage.getItem("todoPagePosition") || "null") ?? {
    top: 300,
    left: 300,
  },
});

export const MessengerPagePositionState = atom<DragPosition>({
  key: `messengerPagePositionState${v4()}`,
  default: JSON.parse(
    localStorage.getItem("messengerPagePosition") || "null"
  ) ?? {
    top: 500,
    left: 400,
  },
});

export const ChatPagePositionState = atom<DragPosition>({
  key: `chatPagePositionState${v4()}`,
  default: JSON.parse(localStorage.getItem("chatPagePosition") || "null") ?? {
    top: 600,
    left: 500,
  },
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
  default: ["todo", "messenger", "chat"],
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
