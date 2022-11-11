import {Link} from "react-router-dom";

function Links() {
  return (
    <div>
        <Link className="links" to="/login">Zaloguj</Link> {' '}
        <Link className="links" to="/register">Załóż konto</Link> {' '}
    </div>
  );
}

export default Links;
