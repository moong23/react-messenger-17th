import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 65px;
  height: 100%;
  background-color: var(--msg-sidebar);
  border-radius: 12px 0 0 12px;
  padding: 6px 4px;
`;

export const SidebarBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SidebarIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 40px 0;
  padding: 10px 0;
  box-sizing: border-box;
  gap: 30px;
`;
