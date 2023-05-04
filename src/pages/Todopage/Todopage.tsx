import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import Todo from "../../components/Todo/Todo";
import CircleBtn from "../../components/CircleBtn/CircleBtn";

import {
  CardToolBar,
  TodopageContainer,
  CardPlusBtn,
  CardMainDiv,
  NotHoverDiv,
  CardTodoText,
  CardTodoDiv,
} from "./Todopage.element";
import { priorityState } from "../../states/atom";
import prioritize from "../../hooks/prioritize";
import DragContainer from "../../components/DragContainer/DragContainer";

const Todopage = () => {
  interface ListProps {
    id: Date;
    content: string;
    tag: string;
    isDone: boolean;
  }
  const [render, setRender] = useState<boolean>(false);
  const [allList, setAllList] = useState<ListProps[]>([]);
  const [priority, setPriority] = useRecoilState(priorityState);
  const todoList = allList?.filter((item: ListProps) => !item.isDone);
  const doneList = allList?.filter((item: ListProps) => item.isDone);
  // Todopage로 라우팅 된 후 100ms 후에 Todopage의 render state를 true로 변경
  useEffect(() => {
    setTimeout(() => setRender(true), 100);
    setAllList(JSON.parse(localStorage.getItem("todoList") || "[]"));
  }, []);

  return (
    <DragContainer name="TODO_PAGE">
      <TodopageContainer
        render={render}
        onClick={() => setPriority(prioritize("TODO_PAGE", priority))}
      >
        <CardToolBar render={render}>
          <CircleBtn color="red" type="button" name="todo" />
          <CircleBtn color="yellow" type="button" />
          <CircleBtn color="green" type="button" />
          {/* TODO: onClick => hoverDiv comes up */}
          <CardPlusBtn onClick={() => alert("btn")} />
        </CardToolBar>
        <CardMainDiv>
          <NotHoverDiv render={render} hoverRender={false}>
            <CardTodoText>TODO [{todoList.length}개]</CardTodoText>
            <CardTodoDiv>
              {todoList.length > 0 &&
                todoList.map((item) => {
                  return (
                    <Todo
                      key={item.id.toString()}
                      id={item.id}
                      content={item.content}
                      tag={item.tag}
                      done={item.isDone}
                    />
                  );
                })}
              {/* {todoList.length === 0 && <Todo tag={-1} />} */}
            </CardTodoDiv>
            <CardTodoText>DONE [{doneList.length}개]</CardTodoText>
            <CardTodoDiv>
              {doneList.length > 0 &&
                doneList.map((item) => {
                  return (
                    <Todo
                      key={item.id.toString()}
                      id={item.id}
                      content={item.content}
                      tag={item.tag}
                      done={item.isDone}
                    />
                  );
                })}
              {/* {doneList.length === 0 && <Todo tag={-2} />} */}
            </CardTodoDiv>
          </NotHoverDiv>
        </CardMainDiv>
      </TodopageContainer>
    </DragContainer>
  );
};
export default Todopage;
