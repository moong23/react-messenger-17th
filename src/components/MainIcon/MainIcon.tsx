import React from "react";
import { useRecoilState } from "recoil";

import {
  clickedIconState,
  priorityState,
  todoOpenState,
  messengerOpenState,
} from "../../states/atom";
import {
  MainIconContainer,
  MainIconImgDiv,
  MainIconImg,
  MainIconSubText,
} from "./MainIcon.element";

import icon_todo from "../../assets/icon_todo.png";
import icon_messenger from "../../assets/icon_messenger.png";
import DragContainer from "../DragContainer/DragContainer";

interface MIProps {
  name: "TODO" | "카카오톡";
}

const MainIcon = ({ name }: MIProps) => {
  const [clickedIcon, setClickedIcon] = useRecoilState(clickedIconState);
  const [todoOpen, setTodoOpen] = useRecoilState(todoOpenState);
  const [messengerOpen, setMessengerOpen] = useRecoilState(messengerOpenState);

  const handleIconClick = (
    e: React.MouseEvent<HTMLDivElement>,
    name: string
  ) => {
    if (e.detail >= 2) {
      if (name === "TODO") {
        setTodoOpen(!todoOpen);
      } else if (name === "카카오톡") {
        setMessengerOpen(!messengerOpen);
      }
    }
  };

  const RenderIcon = () => {
    let iconSrc;
    switch (name) {
      case "TODO":
        iconSrc = icon_todo;
        break;
      case "카카오톡":
        iconSrc = icon_messenger;
        break;
      default:
        iconSrc = icon_todo;
        break;
    }
    return (
      <DragContainer name={name}>
        <MainIconContainer onClick={(e) => handleIconClick(e, name)}>
          <MainIconImgDiv clicked={clickedIcon === name}>
            <MainIconImg
              src={iconSrc}
              width="70"
              height="70"
              draggable={false}
            />
          </MainIconImgDiv>
          <MainIconSubText clicked={clickedIcon === name}>
            {name}
          </MainIconSubText>
        </MainIconContainer>
      </DragContainer>
    );
  };

  return <RenderIcon />;
};

export default React.memo(MainIcon);
