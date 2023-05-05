import styled from "styled-components";

export const ChatMorePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const ChatMorePageElement = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  border-radius: 12px;
  padding-left: 20px;
  gap: 20px;
  &:hover {
    background-color: #ebebeb;
    cursor: pointer;
  }
`;
