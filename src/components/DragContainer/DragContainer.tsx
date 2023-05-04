import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect, useCallback } from "react";

import {
  TodoIconPositionState,
  MessengerIconPositionState,
  TodoPagePositionState,
  MessengerPagePositionState,
  ChatPagePositionState,
  priorityState,
} from "../../states/atom";

interface DCProps {
  name: string;
  children: React.ReactNode;
}

interface DragParams {
  event: React.MouseEvent | React.TouchEvent;
  active: boolean;
  offset: [number, number];
}

const getPositionFromLocalStorage = (
  key: string,
  defaultValue: [number, number]
): [number, number] => {
  return JSON.parse(localStorage.getItem(key) || "null") ?? defaultValue;
};

const savePositionToLocalStorage = (
  key: string,
  value: [number, number]
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const DragContainer = ({ name, children }: DCProps) => {
  const [todoIconPosition, setTodoIconPosition] = useRecoilState(
    TodoIconPositionState
  );
  const [messengerIconPosition, setMessengerIconPosition] = useRecoilState(
    MessengerIconPositionState
  );
  const [todoPagePosition, setTodoPagePosition] = useRecoilState(
    TodoPagePositionState
  );
  const [messengerPagePosition, setMessengerPagePosition] = useRecoilState(
    MessengerPagePositionState
  );
  const [chatPagePosition, setChatPagePosition] = useRecoilState(
    ChatPagePositionState
  );
  const priority = useRecoilValue(priorityState);

  const positionMap: {
    [key: string]: [
      number[],
      React.Dispatch<React.SetStateAction<number[]>>,
      string
    ];
  } = {
    TODO: [todoIconPosition, setTodoIconPosition, "todoIconPosition"],
    카카오톡: [
      messengerIconPosition,
      setMessengerIconPosition,
      "messengerIconPosition",
    ],
    TODO_PAGE: [todoPagePosition, setTodoPagePosition, "todoPagePosition"],
    MESSENGER_PAGE: [
      messengerPagePosition,
      setMessengerPagePosition,
      "messengerPagePosition",
    ],
    CHAT_PAGE: [chatPagePosition, setChatPagePosition, "chatPagePosition"],
  };

  const pos = useSpring({
    x: positionMap[name][0][0],
    y: positionMap[name][0][1],
  });

  useEffect(() => {
    Object.entries(positionMap).forEach(
      ([_, [_A, setStateFn, localStorageKey]]) => {
        setStateFn(getPositionFromLocalStorage(localStorageKey, [0, 0]));
      }
    );
    console.log(priority);
  }, []);

  const onDrag = useCallback(
    (params: DragParams) => {
      params.event.preventDefault(); // for firefox
      pos.x.set(params.offset[0]);
      pos.y.set(params.offset[1]);
      if (!params.active) {
        const [_, setStateFn, localStorageKey] = positionMap[name];
        setStateFn(params.offset);
        savePositionToLocalStorage(localStorageKey, params.offset);
      }
    },
    [name, pos.x, pos.y]
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      event.preventDefault();
    }
  };

  const bindPos = useDrag(onDrag);

  return (
    <animated.div
      {...bindPos()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        x: pos.x,
        y: pos.y,
        touchAction: "none",
        position: "relative",
        zIndex: priority.indexOf(name) === -1 ? 0 : priority.indexOf(name) + 1,
      }}
    >
      {children}
    </animated.div>
  );
};
export default DragContainer;
