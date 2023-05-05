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
import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { searchValueState } from "../../states/atom";
import { useNavigate } from "react-router-dom";
import prioritize from "../../hooks/prioritize";
import SearchContainer from "../../components/SearchContainer/SearchContainer";

const ChatMainPage = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const searchValue = useRecoilValue(searchValueState);
  const [renderList, setRenderList] = useState(ChatDummy);
  const [priority, setPriority] = useRecoilState(priorityState);
  const handleClickUser = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (e.detail >= 2) {
      navigate(`/chat/${id}`);
      setPriority(prioritize("CHAT_PAGE", priority));
    }
  };

  useEffect(() => {
    console.log(searchValue);
    if (searchValue === "") {
      setRenderList(ChatDummy);
    } else {
      setRenderList(
        ChatDummy.filter((item) => {
          return item.name.includes(searchValue);
        })
      );
    }
  }, [searchValue]);

  return (
    <MainMsgContainer>
      <MainContainer>
        <MainTopBarDiv>
          친구
          <FaSearch
            onClick={() => {
              setSearchOpen(!searchOpen);
            }}
          />
        </MainTopBarDiv>
        {searchOpen && <SearchContainer />}
        <MainUserContainer>
          <>
            {renderList.map((chat) => {
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
