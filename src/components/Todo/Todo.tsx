import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { allListState } from "../../states/atom";
import { TodoContainer, TodoTitle, TodoTime } from "./Todo.element";

interface TDProps {
  id: Date;
  content: string;
  tag?: string | -1 | -2;
  done: boolean;
}

const Todo = ({ id, content, tag, done }: TDProps) => {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);
  const [timeString, setTimeString] = useState("");

  const [allList, setAllList] = useRecoilState(allListState);

  const todoContainerDiv = useRef<HTMLDivElement>(null);
  const todoTitleDiv = useRef<HTMLDivElement>(null);
  const todoTimeDiv = useRef<HTMLDivElement>(null);

  const calculateTime = (timestring: Date) => {
    const timeNum = (Date.now() - Number(new Date(timestring))) / 60000;
    const days = Math.floor(timeNum / 1440);
    const hours = Math.floor((timeNum % 1440) / 60);
    const minutes = Math.floor(timeNum % 60);

    let parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours % 24 > 0) parts.push(`${hours % 24}h`);
    if (minutes > 0) parts.push(`${minutes}m`);

    setTimeString(parts.length > 0 ? parts.join(" ") : "just now");
  };

  useEffect(() => {
    calculateTime(id);
    const timer = setInterval(() => {
      calculateTime(id);
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, [id]);

  const handleTodoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (todoContainerDiv.current) {
      const containerWidth = todoContainerDiv.current.offsetWidth;

      let clickPosition = e.nativeEvent.offsetX;
      // 시간 클릭한 경우
      if (e.target === todoTimeDiv.current) {
        // 이미 오른쪽 toggle 되어 있으면
        if (toggleRight) {
          let targetData = allList.find((todo: TDProps) => todo.id === id);
          targetData.isDone = true;
          console.log(targetData);
          //   localStorage.setItem("todoList", JSON.stringify(currentTodo));
          //   setAllList(allList);
          // toggle 안되어 있으면 state 초기화 후 오른쪽으로 toggle
        } else {
          if (toggleLeft) {
            setToggleLeft(false);
          } else {
            setToggleRight(true);
          }
        }
      }
      // 제목 클릭한 경우
      else {
        if (e.target === todoTitleDiv.current) {
          clickPosition += 10;
        }
        // 전체 영역 클릭 handling
        if (clickPosition < containerWidth * 0.4) {
          if (toggleRight) {
            setToggleRight(false);
          } else {
            setToggleLeft(true);
          }
          if (toggleLeft) {
            let targetData = allList.find((todo: TDProps) => todo.id !== id);
            targetData.isDone = true;
            console.log(allList);
            //   localStorage.setItem("todoList", JSON.stringify(currentTodo));
            //   setAllList(allList);
          }
        } else if (clickPosition > containerWidth * 0.6) {
          if (toggleLeft) {
            setToggleLeft(false);
          } else if (toggleRight) {
            let targetData = allList.find((todo: TDProps) => todo.id === id);
            targetData.isDone = true;
            console.log(targetData);

            // console.log(currentTodo);
            // localStorage.setItem("todoList", JSON.stringify(currentTodo));
            // setAllList(currentTodo);
            // toggle 안되어 있으면 state 초기화 후 오른쪽으로 toggle
          } else {
            setToggleRight(true);
          }
        }
      }
    }
  };

  const handleDoneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (todoContainerDiv.current) {
      const containerWidth = todoContainerDiv.current.offsetWidth;
      let clickPosition = e.nativeEvent.offsetX;
      if (e.target === todoTimeDiv.current) {
        if (toggleLeft) {
          setToggleLeft(false);
        }
      } else {
        if (e.target === todoTitleDiv.current) {
          clickPosition += 10;
        }
        if (clickPosition < containerWidth * 0.4) {
          if (!toggleLeft) {
            setToggleLeft(true);
          } else {
            let targetData = allList.find((todo: TDProps) => todo.id === id);
            targetData.isDone = false;
            console.log(targetData);
            // localStorage.setItem("todoList", JSON.stringify(currentTodo));
            // setAllList(currentTodo);
          }
        } else if (clickPosition > containerWidth * 0.6) {
          if (toggleLeft) {
            setToggleLeft(false);
          }
        }
      }
    }
  };
  if (tag !== -1 && tag !== -2) {
    return (
      <TodoContainer
        toggleleft={toggleLeft}
        toggleright={done ? false : toggleRight}
        onClick={done ? handleDoneClick : handleTodoClick}
        ref={todoContainerDiv}
      >
        <TodoTitle ref={todoTitleDiv}>{content}</TodoTitle>
        <TodoTime tag={tag ?? "red"} ref={todoTimeDiv}>
          {timeString}
        </TodoTime>
      </TodoContainer>
    );
  } else {
    if (tag === -1) {
      return (
        <TodoContainer>
          <TodoTitle ref={todoTitleDiv}>PRESS + ON THE TOP BAR</TodoTitle>
          <TodoTime tag={"red"}>to add todo</TodoTime>
        </TodoContainer>
      );
    } else {
      return (
        <>
          <TodoContainer>
            <TodoTitle ref={todoTitleDiv}>CLICK LEFT TWICE</TodoTitle>
            <TodoTime tag={"red"}>to delete todo</TodoTime>
          </TodoContainer>
          <TodoContainer>
            <TodoTitle ref={todoTitleDiv}>CLICK RIGHT TWICE</TodoTitle>
            <TodoTime tag={"green"}>to complete todo</TodoTime>
          </TodoContainer>
        </>
      );
    }
  }
};

export default Todo;
