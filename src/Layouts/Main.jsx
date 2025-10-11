// import { Outlet } from "react-router";
// import Navbar from "../Pages/Shared/Navbar";
// import Footer from "../Pages/Shared/Footer";

// const Main = () => {
//   return (
//     <div className="relative">
//       <Navbar />

//       <div className="min-h-[calc(100vh-371px)] sm:min-h-[calc(100vh-381px)] mt-[64px] sm:mt-[74px] bg-[#FBFEFA] mb-10">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Main;

import { Outlet } from "react-router-dom"; // Use 'react-router-dom' instead of 'react-router'
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    // STEP 1: Main wrapper must span full viewport height and use Flex Column layout.
    // The 'relative' class is no longer necessary here.
    <div className="min-h-screen flex flex-col">
      {/* 2. Navbar/Header: Assuming it's a fixed/sticky element.
         If it's fixed, you might need to adjust its positioning in the Navbar component itself.
         For this example, we'll treat it as a normal flow element and rely on the content margin.
      */}
      <Navbar />

      {/* 3. Main Content Area: Use <main> tag for semantics. 
         - The brittle min-h-[calc(...)] classes are REMOVED.
         - 'flex-grow' tells this section to take up all available vertical space.
         - The top margin (mt-[...]) remains essential to push the content down past the Navbar.
      */}
      <main className="flex-grow mt-[64px] sm:mt-[74px] bg-[#FBFEFA] mb-10">
        <Outlet />
      </main>

      {/* 4. Footer: Will automatically be pushed to the bottom. */}
      <Footer />
    </div>
  );
};

export default Main;
