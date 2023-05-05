import { FaSearch } from "react-icons/fa";
import {
  MainContainer,
  MainMsgContainer,
  MainTopBarDiv,
  MainUserContainer,
  MainUserDiv,
  MainMsgImg,
  MainMsgName,
} from "./ChatMainPage.element";
import { useRecoilState } from "recoil";
import { priorityState } from "../../states/atom";

import ChatDummy from "../../dummy/dummychat.json";
import React from "react";
import { useNavigate } from "react-router-dom";
import prioritize from "../../hooks/prioritize";

const ChatMainPage = () => {
  const navigate = useNavigate();
  const [priority, setPriority] = useRecoilState(priorityState);
  const handleClickUser = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (e.detail >= 2) {
      navigate(`/chat/${id}`);
      setPriority(prioritize("CHAT_PAGE", priority));
    }
  };
  return (
    <MainMsgContainer>
      <MainContainer>
        <MainTopBarDiv>
          친구
          <FaSearch />
        </MainTopBarDiv>
        <MainUserContainer>
          <>
            {ChatDummy.map((chat) => {
              return (
                <MainUserDiv
                  key={chat.id}
                  onClick={(e) => handleClickUser(e, chat.id)}
                >
                  <MainMsgImg src={chat.img} />
                  <MainMsgName>{chat.name}</MainMsgName>
                </MainUserDiv>
              );
            })}
          </>
        </MainUserContainer>
      </MainContainer>
    </MainMsgContainer>
  );
};

export default ChatMainPage;
