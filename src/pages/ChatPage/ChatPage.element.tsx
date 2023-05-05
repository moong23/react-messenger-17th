import styled from "styled-components";

interface CMDProps {
  clicked: boolean;
}

export const ChatPageContainer = styled.div`
  display: flex;
  width: 400px;
  height: 90vh;
  background-color: var(--chatroom-main);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 37%) 0px 0px 10px 0px;
`;

export const ChatTopBarDiv = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ChatTopBarBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin: 8px 0 0 4px;
`;

export const ChatTopBarDescDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding: 8px 12px;
`;

export const ChatRoomMainDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 8px 12px 8px;
  overflow-y: scroll;
`;

export const ChatTextDiv = styled.div<CMDProps>`
  min-height: 40px;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.clicked ? "row-reverse" : "row")};
  align-items: center;
  margin: 8px 0;
`;

export const ChatProfileImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40%;
  margin: 0 8px;
`;

export const ChatMessageDiv = styled.div<CMDProps>`
  min-height: 30px;
  max-width: 80%;
  background-color: ${(props) =>
    props.clicked ? "var(--chatroom-mychat)" : "var(--chatroom-yourchat)"};
  border-radius: ${(props) =>
    !props.clicked ? "0 8px 8px 8px" : "8px 0 8px 8px"};
  display: flex;
  align-items: center;
  padding: 8px;
  word-break: break-all;
  white-space: pre-wrap;
`;

export const ChatRoomTimeDiv = styled.div`
  font-size: 12px;
  align-self: flex-end;
  margin: 0 8px;
  color: var(--msg-talk-text);
`;

export const ChatRoomInputDiv = styled.form`
  height: 160px;
  width: 100%;
  background-color: white;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
`;

export const ChatRoomInputTag = styled.textarea`
  height: 80px;
  width: 100%;
  border: none;
  padding: 12px;
  font-size: 16px;
  overflow-y: scroll;
  &:focus {
    outline: none;
  }
`;

export const ChatRoomBottomDiv = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

interface CRBBProps {
  inputValid: boolean;
}

export const ChatRoomBottomBtn = styled.button<CRBBProps>`
  height: 28px;
  width: 60px;
  background-color: ${(props) =>
    props.inputValid
      ? "var(--chatroom-mychat)"
      : "var(--chatroom-button-disabled)"};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  margin-right: 8px;
`;
