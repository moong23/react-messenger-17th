import styled from "styled-components";

export const SearchConatinerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  color: black;
  background-color: transparent;
  &::placeholder {
    color: gray;
  }
`;
