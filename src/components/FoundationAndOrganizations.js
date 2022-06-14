import { useState } from "react";
import { ReactComponent as SVGDecoration } from "../assets/Decoration.svg";
import Foundation from "./Foundation";
import Organization from "./Organization";
import Locally from "./Locally";

function FoundationAndOrganizations() {

  const [id, setId] = useState(0);
  const TaOtab = [<Foundation />, <Organization />, <Locally />];

  function handleMouseOver(e) {
      e.target.style.border = "2px solid #737373";
      e.target.style.cursor = "pointer";
  }

  function handleMouseOut(e) {
      e.target.style.border = "2px solid transparent";
  }

  function handleSpanClick(id) {
      setId(id);
  }

  return (
    <div id="foundationAndOrganizations">
        <h1>Komu pomagamy?</h1>
        <SVGDecoration className="homeTextSVGDecoration"/>
        <div className="foundationAndOrganizations__links">
            <div
                className="foundationAndOrganizations__links__single"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => handleSpanClick(0)}
            >
                Fundacjom
            </div>
            <div
                className="foundationAndOrganizations__links__single"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => handleSpanClick(1)}
            >
                Organizacjom <br/> pozarządowym
            </div>
            <div
                className="foundationAndOrganizations__links__single"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => handleSpanClick(2)}
            >
                Lokalnym <br/> zbiórkom
            </div>
        </div>
        {TaOtab[id]}
    </div>
  );
}

export default FoundationAndOrganizations;
