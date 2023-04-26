import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import React from "react";

interface DCProps {
  name: string;
  children: React.ReactNode;
}

export default function DragContainer({ name, children }: DCProps) {
  const pos = useSpring({
    x: 0,
    y: 0,
  });

  const bindPos = useDrag((params) => {
    pos.x.set(params.offset[0]);
    pos.y.set(params.offset[1]);
  });

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
}
