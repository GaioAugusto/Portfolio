import React from "react";
import HomePage from "./pages/HomePage";
import { MouseTrail } from "./components/Cursor";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <MouseTrail />
      <HomePage />
    </React.Fragment>
  );
};

export default App;
