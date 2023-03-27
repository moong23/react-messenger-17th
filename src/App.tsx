import { useState, useEffect } from "react";

// GlobalStyle
import GlobalStyle from "./styles/GlobalStyle";

import Mainpage from "./pages/Mainpage/Mainpage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Mainpage />
    </>
  );
}

export default App;
