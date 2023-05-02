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
  const pos = useSpring(
    name === "TODO"
      ? {
          x: todoIconPosition[0],
          y: todoIconPosition[1],
        }
      : name === "카카오톡"
      ? {
          x: messengerIconPosition[0],
          y: messengerIconPosition[1],
        }
      : name === "TODO_PAGE"
      ? {
          x: todoPagePosition[0],
          y: todoPagePosition[1],
        }
      : name === "MESSENGER_PAGE"
      ? {
          x: messengerPagePosition[0],
          y: messengerPagePosition[1],
        }
      : name === "CHAT_PAGE"
      ? {
          x: chatPagePosition[0],
          y: chatPagePosition[1],
        }
      : {
          x: 0,
          y: 0,
        }
  );

  useEffect(() => {
    setTodoIconPosition(
      JSON.parse(localStorage.getItem("todoIconPosition") || "null") ?? [0, 0]
    );

    setMessengerIconPosition(
      JSON.parse(localStorage.getItem("messengerIconPosition") || "null") ?? [
        0, 0,
      ]
    );

    setTodoPagePosition(
      JSON.parse(localStorage.getItem("todoPagePosition") || "null") ?? [0, 0]
    );

    setMessengerPagePosition(
      JSON.parse(localStorage.getItem("messengerPagePosition") || "null") ?? [
        0, 0,
      ]
    );

    setChatPagePosition(
      JSON.parse(localStorage.getItem("chatPagePosition") || "null") ?? [0, 0]
    );
  }, []);

  const onDrag = useCallback(
    (params: DragParams) => {
      params.event.preventDefault(); //for firefox
      pos.x.set(params.offset[0]);
      pos.y.set(params.offset[1]);
      if (!params.active) {
        console.log("activated");
        switch (name) {
          case "TODO":
            setTodoIconPosition([params.offset[0], params.offset[1]]);
            localStorage.setItem(
              "todoIconPosition",
              JSON.stringify([params.offset[0], params.offset[1]])
            );
            break;
          case "카카오톡":
            setMessengerIconPosition([params.offset[0], params.offset[1]]);
            localStorage.setItem(
              "messengerIconPosition",
              JSON.stringify([params.offset[0], params.offset[1]])
            );
            break;
          case "TODO_PAGE":
            setTodoPagePosition([params.offset[0], params.offset[1]]);
            localStorage.setItem(
              "todoPagePosition",
              JSON.stringify([params.offset[0], params.offset[1]])
            );
            break;
          case "MESSENGER_PAGE":
            setMessengerPagePosition([params.offset[0], params.offset[1]]);
            localStorage.setItem(
              "messengerPagePosition",
              JSON.stringify([params.offset[0], params.offset[1]])
            );

            break;
          case "CHAT_PAGE":
            setChatPagePosition([params.offset[0], params.offset[1]]);
            localStorage.setItem(
              "chatPagePosition",
              JSON.stringify([params.offset[0], params.offset[1]])
            );
            break;
        }
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

export default React.memo(DragContainer);
