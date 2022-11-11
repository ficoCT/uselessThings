import Links from "./Links";
import ScrollLinks from "./ScrollLinks";
import LoginLinks from "./LoginLinks";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const auth = getAuth();
  let navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
       if (user) {
           setIsSubmitted(true);
           setEmail(user.email);
           // navigate('/');
       } else {
           setIsSubmitted(false);
       }
  });

  return (
    <>
        {isSubmitted ? <LoginLinks email={email}/> : <Links />}
        <ScrollLinks />
    </>
  );
}

export default Navbar;
