import { ReactComponent as SVGDecoration } from "../assets/Decoration.svg";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import Links from "./Links";
import {validateRegister} from "../validateRegister";
import {useState} from "react";

function Register() {
    const [values, setValues] = useState({email: "", password: "", password1: ""});
    const [errorMessages, setErrorMessages] = useState(null);

    function handleMouseOver(e) {
        e.target.style.border = "2px solid #737373";
        e.target.style.cursor = "pointer";
    }

    function handleMouseOut(e) {
        e.target.style.border = "2px solid transparent";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessages(validateRegister(values));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div className="login container">
            <div className="login__navbar" >
                <Links />
            </div>
            <span className="login__title">
          Załóż konto
      </span>
            <SVGDecoration className="homeTextSVGDecoration"/>
            <div className="login__input">
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    errorMessage={errorMessages?.email}
                    onChange={handleChange}
                />
                <Input
                    label="Hasło"
                    name="password"
                    type="password"
                    value={values.password}
                    errorMessage={errorMessages?.password}
                    onChange={handleChange}
                />
                <Input
                    label="Powtórz hasło"
                    name="password1"
                    type="password"
                    value={values.password1}
                    errorMessage={errorMessages?.password1}
                    onChange={handleChange}
                />
            </div>
            <div className="login__account">
                <Link
                    className="login__account__register" to="/login"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Zaloguj się
                </Link>
                <div
                    className="login__account__login"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleSubmit}
                >
                    Załóż konto
                </div>
            </div>
        </div>

    );
}

export default Register;

