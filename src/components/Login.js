import { ReactComponent as SVGDecoration } from "../assets/Decoration.svg";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import Links from "./Links";

function Login() {

  function handleMouseOver(e) {
      e.target.style.border = "2px solid #737373";
      e.target.style.cursor = "pointer";
  }

  function handleMouseOut(e) {
      e.target.style.border = "2px solid transparent";
  }

  return (
    <div className="login container">
      <div className="login__navbar" >
          <Links />
      </div>
      <span className="login__title">
          Zaloguj się
      </span>
      <SVGDecoration className="homeTextSVGDecoration"/>
      <div className="login__input">
          <Input
              label="Email"
              name="email"
              type="email"
          />
          <Input
              label="Hasło"
              name="password"
              type="password"
          />
      </div>
      <div className="login__account">
          <Link
              className="login__account__register" to="/register"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
          >
                  Załóż konto
          </Link>
          <div
              className="login__account__login"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
          >
              Zaloguj się
          </div>
      </div>
    </div>

  );
}

export default Login;
