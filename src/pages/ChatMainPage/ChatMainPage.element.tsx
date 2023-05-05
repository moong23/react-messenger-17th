import styled from "styled-components";

export const MainMsgContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
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
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MainUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
`;

export const MainMsgImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 40%;
  margin: 0 12px 0 20px;
`;

export const MainMsgName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
