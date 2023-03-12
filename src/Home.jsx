import React from "react";
import Navbar from "./Components/Navbar";
import Sidemenu from "./Components/Sidemenu";
import Videopage from "./Components/Videopage";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mainmenu">
        <Sidemenu/>
      <Videopage />
      </div>
      <div id="footer">
        &copy; 2023 StreamFlowzz Entertainment
      </div>
    </>
  );
};
export default Home;
