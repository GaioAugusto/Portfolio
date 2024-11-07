import React from "react";
import { Menu } from "../components/Menu";
import { About } from "../components/About";
import { Home } from "../components/Home";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {" "}
      {/* Adjust background as needed */}
      <Menu />
      <main className="pt-16">
        {" "}
        {/* Adjust padding based on menu height */}
        {/* Initial Section Placeholder */}
        <Home />
        {/* About Section */}
        <About />
        {/* Add more sections here */}
      </main>
    </div>
  );
};

export default HomePage;
