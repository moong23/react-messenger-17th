import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  MainMsgContainer,
  MainMsgDiv,
  MainMsgImg,
  MainMsgName,
  MainMsgText,
  MainMsgTime,
  MainTopBarDiv,
  MainTopBarIconBtn,
  MainTopBarSortBtn,
  MsgpageContainer,
} from "./Msgpage.element";

import { FaCaretDown, FaSearch } from "react-icons/fa";

import ChatDummy from "../../dummy/dummychat.json";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentTabState,
  priorityState,
  searchValueState,
} from "../../states/atom";
import prioritize from "../../hooks/prioritize";
import DragContainer from "../../components/DragContainer/DragContainer";
import ChatMainPage from "../ChatMainPage/ChatMainPage";
import ChatMorePage from "../ChatMorePage/ChatMorePage";
import SearchContainer from "../../components/SearchContainer/SearchContainer";

interface RMMProps {
  id: number;
  name: string;
  img: string;
  text: string;
  time: string;
}

const MsgPage = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [priority, setPriority] = useRecoilState(priorityState);
  const currentTab = useRecoilValue(currentTabState);
  const [clickedChat, setClickedChat] = useState<number>(-1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setClickedChat(id);
    if (e.detail > 1) {
      handleDBClick(id);
    }
  };

  const handleDBClick = (id: number) => {
    setTimeout(() => setPriority(prioritize("CHAT_PAGE", priority)), 0);
    navigate("/chat/" + id);
  };

  const RenderMainMsg = ({ id, name, img, text, time }: RMMProps) => {
    let timeArr = time?.split(":");
    let daystring = time?.split("오")[0];
    let day = `${daystring?.split(".")[1]?.trim()}월 ${daystring
      .split(".")[2]
      ?.trim()}일`;
    let hour = Number(timeArr[0]?.split(" ")[1]);
    let min = Number(timeArr[1])?.toString().padStart(2, "0");
    let ampm = timeArr[0]?.split(".")[3]?.split(" ")[1];
    time =
      daystring.trim() === new Date().toLocaleDateString().trim()
        ? ampm + " " + hour + ":" + min
        : day;

    return (
      <MainMsgContainer
        clicked={clickedChat === id}
        onClick={(e) => handleClick(e, id)}
      >
        <MainMsgImg src={img} />
        <MainMsgDiv>
          <MainMsgName>{name}</MainMsgName>
          <MainMsgText>{text}</MainMsgText>
        </MainMsgDiv>
        <MainMsgTime>{time}</MainMsgTime>
      </MainMsgContainer>
    );
  };

  const RenderChatList = () => {
    return (
      <>
        <MainTopBarDiv>
          <MainTopBarSortBtn>
            채팅 <FaCaretDown color="gray" size={15} />
          </MainTopBarSortBtn>
          <MainTopBarIconBtn onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch />
          </MainTopBarIconBtn>
        </MainTopBarDiv>
        {/* {searchOpen && <SearchContainer />} */}
        {ChatDummy.map((item) => {
          return (
            <RenderMainMsg
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              text={item.chat[Array(item.chat).length].msg}
              time={item.chat[Array(item.chat).length].time}
            />
          );
        })}
      </>
    );
  };

  return (
    <DragContainer name="MESSENGER_PAGE">
      <MsgpageContainer
        onClick={() => setPriority(prioritize("MESSENGER_PAGE", priority))}
      >
        <Sidebar />
        <MainContainer>
          {currentTab === 0 ? (
            <ChatMainPage />
          ) : currentTab === 1 ? (
            <RenderChatList />
          ) : (
            <ChatMorePage />
          )}
        </MainContainer>
      </MsgpageContainer>
    </DragContainer>
  );
};

export default MsgPage;
