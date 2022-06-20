import {Link} from "react-router-dom";

function LoginLinks({email}) {

  return (
    <div>
        <span>Cześć {email}!</span>
        <Link className="links" to="/login">Oddaj rzeczy</Link> {' '}
        <Link className="links" to="/logout">Wyloguj</Link> {' '}
    </div>
  );
}

export default LoginLinks;
