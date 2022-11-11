import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import HandOverThingsText from "./HandOverThingsText";

function HandOverThingsNavbar() {
  return (
      <div className="homeHeaderNavbar">
          <Navbar />
          <HandOverThingsText />
          <Outlet />  
      </div>
  );
}

export default HandOverThingsNavbar;
