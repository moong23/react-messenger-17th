import { atom } from "recoil";

interface IconPosition {
  top: number;
  left: number;
}

export const TodoIconPositionState = atom<IconPosition>({
  key: "todoIconPositionState",
  default: JSON.parse(localStorage.getItem("iconPosition") || "null") ?? {
    top: 30,
    left: 30,
  },
});

export const MessengerIconPositionState = atom<IconPosition>({
  key: "messengerIconPositionState",
  default: JSON.parse(localStorage.getItem("iconPosition") || "null") ?? {
    top: 160,
    left: 30,
  },
});

export const clickedIconState = atom({
  key: "clickedIconState",
  default: "",
});

export const selectedTagState = atom({
  key: "selectedTagState",
  default: "red",
});

export const allListState = atom({
  key: "allListState",
  default: JSON.parse(localStorage.getItem("todoList") || "null") ?? [],
});
