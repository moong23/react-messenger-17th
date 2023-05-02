import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { useRecoilState } from "recoil";
import React, { useEffect, useCallback } from "react";

import {
  TodoIconPositionState,
  MessengerIconPositionState,
  TodoPagePositionState,
  MessengerPagePositionState,
  ChatPagePositionState,
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

const DragContainer: React.FC<DCProps> = ({ name, children }) => {
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
      ([key, [_, setStateFn, localStorageKey]]) => {
        setStateFn(getPositionFromLocalStorage(localStorageKey, [0, 0]));
      }
    );
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

  const bindPos = useDrag(onDrag);

  return (
    <animated.div
      {...bindPos()}
      style={{
        x: pos.x,
        y: pos.y,
        touchAction: "none",
      }}
    >
      {children}
    </animated.div>
  );
};
export default DragContainer;
