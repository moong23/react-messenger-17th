import styled from "styled-components";

export const MainpageContainer = styled.div<{ src: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.src});
  background-size: cover;
  overflow: hidden;
`;

export const MainpageIconContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
`;

export const MainpageDisplayContainer = styled.div`
  padding: 30px 30px 30px 120px;
`;
