import React from "react";
import { Menu } from "../components/Menu";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Divider } from "../components/Divider";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {" "}
      <Menu />
      <main>
        {" "}
        <Home next="#about" />
        <Divider />
        <About />
        <Divider />
      </main>
    </div>
  );
};

export default HomePage;
