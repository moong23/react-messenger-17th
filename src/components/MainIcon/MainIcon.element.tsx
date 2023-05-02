import styled from "styled-components";

interface MIIDProps {
  clicked: boolean;
}

export const MainIconContainer = styled.div`
  width: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const MainIconImgDiv = styled.div<MIIDProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  border: ${(props) => (props.clicked ? "2px solid rgb(176 176 176)" : "none")};
  border-radius: 6px;
  background-color: ${(props) => (props.clicked ? "rgb(0, 0, 0, 0.5)" : "")};
`;

export const MainIconImg = styled.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
`;

export const MainIconSubText = styled.div<MIIDProps>`
  font-size: 14px;
  display: flex;
  padding: 1px 4px;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(props) => (props.clicked ? "#2A62D9" : "")};
  color: white;
  font-weight: 600;
  text-shadow: #404040 0px 1px 3px;
`;
