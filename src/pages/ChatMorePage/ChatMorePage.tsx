import { ChatMorePageDiv, ChatMorePageElement } from "./ChatMorePage.element";

import { FaGithubSquare, FaEnvelope, FaHammer } from "react-icons/fa";

const ChatMorePage = () => {
  return (
    <ChatMorePageDiv>
      <ChatMorePageElement
        onClick={() => {
          window.open("https://github.com/moong23", "_blank");
        }}
      >
        <FaGithubSquare size={32} />
        Github
      </ChatMorePageElement>
      <ChatMorePageElement
        onClick={() => {
          window.open("mailto:moonki0623@naver.com", "_blank");
        }}
      >
        <FaEnvelope size={32} />
        Email
      </ChatMorePageElement>
      <ChatMorePageElement>
        <FaHammer size={32} />
        WIP
      </ChatMorePageElement>
    </ChatMorePageDiv>
  );
};

export default ChatMorePage;
