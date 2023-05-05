import CircleBtn from "../CircleBtn/CircleBtn";
import {
  SidebarBtnContainer,
  SidebarContainer,
  SidebarIconContainer,
} from "./Sidebar.element";

import { FaUserAlt, FaComment, FaEllipsisH } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { currentTabState } from "../../states/atom";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useRecoilState(currentTabState);

  return (
    <SidebarContainer>
      <SidebarBtnContainer>
        <CircleBtn color="red" type="button" name="messenger" />
        <CircleBtn color="yellow" type="button" />
        <CircleBtn color="green" type="button" />
      </SidebarBtnContainer>
      <SidebarIconContainer>
        <FaUserAlt
          size={20}
          fill={currentPath === 0 ? "black" : "gray"}
          onClick={() => setCurrentPath(0)}
        />
        <FaComment
          size={20}
          fill={currentPath === 1 ? "black" : "gray"}
          onClick={() => setCurrentPath(1)}
        />
        <FaEllipsisH
          size={20}
          fill={currentPath === 2 ? "black" : "gray"}
          onClick={() => setCurrentPath(2)}
        />
      </SidebarIconContainer>
    </SidebarContainer>
  );
};
export default Sidebar;
