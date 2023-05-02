import { useRecoilValue } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { todoOpenState, messengerOpenState } from "../../states/atom";

import background_image from "../../assets/background_image.jpg";
import {
  MainpageContainer,
  MainpageDisplayContainer,
  MainpageIconContainer,
} from "./Mainpage.element";
import Todopage from "../Todopage/Todopage";
import MsgPage from "../Msgpage/Msgpage";
import ChatPage from "../ChatPage/ChatPage";
import MainIcon from "../../components/MainIcon/MainIcon";

const Mainpage = () => {
  const todoOpen = useRecoilValue(todoOpenState);
  const messengerOpen = useRecoilValue(messengerOpenState);

  return (
    <BrowserRouter>
      <MainpageContainer src={background_image}>
        <MainpageIconContainer>
          <MainIcon name="TODO" />
          <MainIcon name="카카오톡" />
        </MainpageIconContainer>
        <MainpageDisplayContainer>
          {todoOpen && <Todopage />}
          {messengerOpen && <MsgPage />}
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/todo" element={<Todopage />} />
            <Route path="/messenger" element={<MsgPage />} />
            <Route path="/chat/:id" element={<ChatPage />} />
          </Routes>
        </MainpageDisplayContainer>
      </MainpageContainer>
    </BrowserRouter>
  );
};

export default Mainpage;
