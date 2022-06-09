import { Link } from "react-router-dom";

function Action() {

  return (
    <div className="actions">
        <Link className="linksActions" to="/login">ODDAJ <br /> RZECZY</Link>
        <Link className="linksActions" to="/login">ZORGANIZUJ <br /> ZBIÓRKĘ</Link>
    </div>
  );
}

export default Action;
