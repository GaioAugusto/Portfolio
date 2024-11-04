import React from "react";
import HomePage from "./pages/HomePage";
import { Menu } from "./components/Menu";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Menu />
      <HomePage />
    </React.Fragment>
  );
};

export default App;
