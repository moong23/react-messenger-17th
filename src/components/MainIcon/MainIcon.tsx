import { useRecoilValue } from "recoil";

import {
  TodoIconPositionState,
  MessengerIconPositionState,
  clickedIconState,
} from "../../states/atom";
import {
  MainIconContainer,
  MainIconImgDiv,
  MainIconImg,
  MainIconSubText,
} from "./MainIcon.element";

import icon_todo from "../../assets/icon_todo.png";
import icon_messenger from "../../assets/icon_messenger.png";

interface MIProps {
  name?: string;
}

interface RIProps {
  iconSrc: string;
  position: {
    top: number;
    left: number;
  };
}

const MainIcon = ({ name }: MIProps) => {
  const todoIconPosition = useRecoilValue(TodoIconPositionState);
  const messengerIconPosition = useRecoilValue(MessengerIconPositionState);
  const clickedIcon = useRecoilValue(clickedIconState);

  const RenderIcon = ({ iconSrc, position }: RIProps) => {
    return (
      <MainIconContainer position={position}>
        <MainIconImgDiv clicked={clickedIcon === name}>
          <MainIconImg src={iconSrc} width="70" height="70" />
        </MainIconImgDiv>
        <MainIconSubText clicked={clickedIcon === name}>{name}</MainIconSubText>
      </MainIconContainer>
    );
  };

  if (name === "TODO") {
    return <RenderIcon iconSrc={icon_todo} position={todoIconPosition} />;
  } else if (name === "카카오톡") {
    return (
      <RenderIcon iconSrc={icon_messenger} position={messengerIconPosition} />
    );
  } else {
    return <>WIP</>;
  }
};

export default MainIcon;
