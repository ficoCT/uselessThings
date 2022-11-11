import {ReactComponent as SVGDecoration} from "../assets/Decoration.svg";
import ContactForm from "./ContactForm";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Success from "./Success";
import {useState} from "react";

function ContactText() {
  const [visibility, setVisibility] = useState(false);

  function handleVisibility( vis ) {
      setVisibility(vis);
      console.log("vis", vis)
  }

  return (
      <>
        <div className="contact__container__text">
            <h2>Skontaktuj się z nami</h2>
            <Success visibility={visibility}/>
            <SVGDecoration className="homeTextSVGDecoration"/>
            <ContactForm
                handleVisibility={handleVisibility}
            />
        </div>
      </>
  );
}

export default ContactText;
