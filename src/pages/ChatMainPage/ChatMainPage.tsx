import { FaSearch } from "react-icons/fa";
import {
  MainContainer,
  MainMsgContainer,
  MainTopBarDiv,
  MainUserContainer,
} from "./ChatMainPage.element";

import ChatDummy from "../../dummy/dummychat.json";

const ChatMainPage = () => {
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
              return chat.name;
            })}
          </>
        </MainUserContainer>
      </MainContainer>
    </MainMsgContainer>
  );
};

export default ChatMainPage;
