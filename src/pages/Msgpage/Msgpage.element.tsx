import styled from "styled-components";
interface MMCProps {
  clicked: boolean;
}

export const MsgpageContainer = styled.div`
  display: flex;
  width: 400px;
  height: 90vh;
  background-color: var(--msg-main);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 37%) 0px 0px 10px 0px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 100%;
`;

export const MainTopBarDiv = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MainTopBarSortBtn = styled.div`
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-left: 20px;
  font-size: 16px;
`;

export const MainTopBarIconBtn = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  &:hover {
    background-color: var(--msg-main-hover);
  }
`;

export const MainMsgContainer = styled.div<MMCProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: ${(props) =>
    props.clicked ? "var(--msg-main-focus)" : "var(--msg-main)"};
  &:hover {
    background-color: ${(props) =>
      props.clicked ? "var(--msg-main-focus)" : "var(--msg-main-hover)"};
  }
`;

export const MainMsgImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 40%;
  margin: 0 12px 0 20px;
`;

export const MainMsgDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainMsgName = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
`;

export const MainMsgText = styled.div`
  display: flex;
  margin-top: 6px;
  font-size: 14px;
  color: var(--msg-talk-text);
`;

export const MainMsgTime = styled.div`
  display: flex;
  font-size: 12px;
  width: 100px;
  margin-right: 12px;
  color: var(--msg-time-text);
`;
