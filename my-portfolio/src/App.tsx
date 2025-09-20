import React from "react";
import HomePage from "./pages/HomePage";
import { MouseTrail } from "./components/Cursor";
import "./styles/mouseTrail.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      {/* <Cursor /> */}
      {/* <MotionCursor /> */}
      <MouseTrail />
      <HomePage />
    </React.Fragment>
  );
};

export default App;
