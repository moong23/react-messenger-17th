import { atom } from "recoil";
import { v4 } from "uuid";

interface IconPosition {
  top: number;
  left: number;
}

export const TodoIconPositionState = atom<IconPosition>({
  key: `todoIconPositionState${v4()}`,
  default: JSON.parse(localStorage.getItem("iconPosition") || "null") ?? {
    top: 30,
    left: 30,
  },
});

export const MessengerIconPositionState = atom<IconPosition>({
  key: `messengerIconPositionState${v4()}`,
  default: JSON.parse(localStorage.getItem("iconPosition") || "null") ?? {
    top: 160,
    left: 30,
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

export const priorityState = atom<"todo" | "messenger">({
  key: `priorityState${v4()}`,
  default: "todo",
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
