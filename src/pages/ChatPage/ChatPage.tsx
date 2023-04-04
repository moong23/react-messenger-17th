import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CircleBtn from "../../components/CircleBtn/CircleBtn";
import {
  ChatMessageDiv,
  ChatPageContainer,
  ChatProfileImg,
  ChatRoomBottomBtn,
  ChatRoomBottomDiv,
  ChatRoomInputDiv,
  ChatRoomInputTag,
  ChatRoomMainDiv,
  ChatTextDiv,
  ChatTopBarBtnDiv,
  ChatTopBarDescDiv,
  ChatTopBarDiv,
  ChatRoomTimeDiv,
} from "./ChatPage.element";

import ChatDummy from "../../dummy/dummychat.json";
import { useRecoilState } from "recoil";
import { priorityState } from "../../states/atom";

const ChatPage = () => {
  const [chatClicked, setChatClicked] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValid, setInputValid] = useState<boolean>(false);
  const [priority, setPriority] = useRecoilState(priorityState);
  const params = useParams();
  const mainRoomRef = useRef<HTMLDivElement>(null);
  const [chatData, setChatData] = useState({
    id: 0,
    name: "",
    img: "",
    text: "",
    chat: [
      {
        id: 0,
        from: 0,
        msg: "",
        time: "",
      },
    ],
  });

  interface RCProps {
    chatClicked: boolean;
    chatFrom: number;
    msg: string;
    time: string;
  }

  useEffect(() => {
    setChatData(
      JSON.parse(localStorage.getItem(`chatData${params.id}`) || "null") ??
        ChatDummy.filter((chat) => chat.id === Number(params.id))[0]
    );
  }, [params.id]);

  useEffect(() => {
    console.log(priority);
  }, [priority]);

  const RenderChat = ({ msg, chatFrom, chatClicked, time }: RCProps) => {
    let timeArr = time?.split(":");
    let daystring = time?.split("오")[0];
    let day = `${daystring?.split(".")[1]?.trim()}월 ${daystring
      .split(".")[2]
      ?.trim()}일`;

    console.log(timeArr[0]?.split(".")[3]?.split(" ")[1]);
    let hour = Number(timeArr[0]?.split(" ")[1]);
    let min = Number(timeArr[1])?.toString().padStart(2, "0");
    let ampm = timeArr[0]?.split(".")[3]?.split(" ")[1];

    time =
      daystring.trim() === new Date().toLocaleDateString().trim()
        ? ampm + " " + hour + ":" + min
        : day;
    if (chatClicked) {
      return (
        <ChatTextDiv clicked={chatFrom === 1}>
          {chatFrom === 1 && <ChatProfileImg src={"/cat1.png"} />}
          {chatFrom === 0 && <ChatProfileImg src={chatData.img} />}
          <ChatMessageDiv clicked={chatFrom === 1}>{msg}</ChatMessageDiv>
          <ChatRoomTimeDiv> {time}</ChatRoomTimeDiv>
        </ChatTextDiv>
      );
    } else {
      return (
        <ChatTextDiv clicked={chatFrom !== 1}>
          {chatFrom === 1 && <ChatProfileImg src={"/cat1.png"} />}
          {chatFrom === 0 && <ChatProfileImg src={chatData.img} />}
          <ChatMessageDiv clicked={chatFrom !== 1}>{msg}</ChatMessageDiv>
          <ChatRoomTimeDiv>{time}</ChatRoomTimeDiv>
        </ChatTextDiv>
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== "") {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    else {
      console.log(inputValue);
      setChatData({
        ...chatData,
        chat: [
          ...chatData.chat,
          {
            id: chatData.chat.length + 1,
            from: chatClicked ? 1 : 0,
            msg: inputValue,
            time: new Date().toLocaleString(),
          },
        ],
      });
      setInputValue("");
      setInputValid(false);
    }
  };
  useEffect(() => {
    localStorage.setItem(`chatData${params.id}`, JSON.stringify(chatData));
    if (mainRoomRef.current)
      mainRoomRef.current.scrollTop = mainRoomRef.current.scrollHeight;
  }, [chatData]);

  const handleEnterCheck = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setInputValue(inputValue.substring(0, inputValue.length) + "\n");
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <ChatPageContainer
      priority={priority === "chat"}
      onClick={() => setPriority("chat")}
    >
      <ChatTopBarDiv onClick={() => setChatClicked(!chatClicked)}>
        <ChatTopBarBtnDiv>
          <CircleBtn color="red" type="button" name="back" />
          <CircleBtn color="yellow" type="button" />
          <CircleBtn color="green" type="button" />
        </ChatTopBarBtnDiv>
        <ChatTopBarDescDiv>
          {!chatClicked && (
            <>
              <ChatProfileImg src={chatData.img} />
              {chatData.name}
            </>
          )}
          {chatClicked && (
            <>
              <ChatProfileImg src={"/cat1.png"} />
              문기
            </>
          )}
        </ChatTopBarDescDiv>
      </ChatTopBarDiv>
      <ChatRoomMainDiv ref={mainRoomRef}>
        {chatData.chat.map((chat) => {
          return (
            <RenderChat
              key={chat.id}
              msg={chat.msg}
              chatFrom={chat.from}
              chatClicked={chatClicked}
              time={chat.time}
            />
          );
        })}
      </ChatRoomMainDiv>
      <ChatRoomInputDiv onSubmit={handleSubmit} onKeyPress={handleEnterCheck}>
        <ChatRoomInputTag value={inputValue} onChange={handleInputChange} />
        <ChatRoomBottomDiv>
          <ChatRoomBottomBtn
            disabled={!inputValid}
            inputValid={inputValid}
            type="submit"
          >
            전송
          </ChatRoomBottomBtn>
        </ChatRoomBottomDiv>
      </ChatRoomInputDiv>
    </ChatPageContainer>
  );
};
export default ChatPage;
