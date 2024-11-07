// import React from "react";
// import { Menu } from "../components/Menu";
// import { About } from "../components/About";
// import { Home } from "../components/Home";

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       {" "}
//       {/* Adjust background as needed */}
//       <Menu />
//       <main className="pt-16">
//         {" "}
//         <Home />
//         <About />
//       </main>
//     </div>
//   );
// };

// export default HomePage;

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
        <Home />
        <Divider />
        <About />
      </main>
    </div>
  );
};

export default HomePage;
