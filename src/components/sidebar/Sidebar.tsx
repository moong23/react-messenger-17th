import CircleBtn from "../CircleBtn/CircleBtn";
import { SidebarBtnContainer, SidebarContainer } from "./Sidebar.element";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarBtnContainer>
        <CircleBtn color="red" type="button" name="messenger" />
        <CircleBtn color="yellow" type="button" />
        <CircleBtn color="green" type="button" />
      </SidebarBtnContainer>
    </SidebarContainer>
  );
};
export default Sidebar;
