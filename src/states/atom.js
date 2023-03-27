import { atom } from "recoil";

export const iconPositionState = atom({
  key: "iconPositionState",
  default: JSON.parse(localStorage.getItem("iconPosition")) ?? [
    {
      name: "todo",
      top: 30,
      left: 30,
    },
    {
      name: "messenger",
      top: 160,
      left: 30,
    },
  ],
});

export const clickedIconState = atom({
  key: "clickedIconState",
  default: "",
});
