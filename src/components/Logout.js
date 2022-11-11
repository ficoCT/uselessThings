import {useState} from "react";
import Links from "./Links";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {ReactComponent as SVGDecoration} from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
// import {useEffect} from "react";

function Logout() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // useEffect(() => {
  //     const auth = getAuth();
  //     signOut(auth).then(() => {
  //         setIsSubmitted(false);
  //     }).catch((error) => {
  //         // An error happened.
  //     });
  // }, []);

  const auth = getAuth();
  signOut(auth).then(() => {
      setIsSubmitted(true);
  }).catch((error) => {
        // An error happened.
  });

  const isLoggedOut = <>Wylogowanie nastąpiło <br /> pomyślnie!</>
  const isNotLoggedOut = <>Uuu coś poszło nie tak!</>

  return (
      <div className="logout container">
        <div className="logout__navbar" >
          <Links />
        </div>
        <span className="logout__title">
          {isSubmitted ? isLoggedOut : isNotLoggedOut }
        </span>
        <SVGDecoration className="homeTextSVGDecoration"/>
        <div className="logout__link">
          <Link
              className="logout__link__homepage"
              to="/"
          >
            Strona główna
          </Link>
        </div>
      </div>
  );
}

export default Logout;
