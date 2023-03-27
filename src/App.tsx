import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

// GlobalStyle
import GlobalStyle from "./styles/GlobalStyle.js";

// RecoilStates
import { clickedIconState, iconPositionState } from "./states/atom.js";

function App() {
  const [clickedIcon, setClikedIcon] = useRecoilState(clickedIconState);
  const [iconPosition, setIconPosition] = useRecoilState(iconPositionState);

  return (
    <div>
      <GlobalStyle />
      React Messanger
    </div>
  );
}

export default App;
