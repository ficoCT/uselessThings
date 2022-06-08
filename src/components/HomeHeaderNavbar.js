import Navbar from "./Navbar";
import HomeText from "./HomeText";
import Action from "./Action";
import {Outlet} from "react-router-dom";

function HomeHeaderNavbar() {
  return (
      <div className="homeHeaderNavbar">
          <Navbar />
          <HomeText />
          <Action />
          <Outlet />  < br/>
      </div>
  );
}

export default HomeHeaderNavbar;
