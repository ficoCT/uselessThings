import {ReactComponent as SVGDecoration} from "../assets/Decoration.svg";
import ContactForm from "./ContactForm";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

function ContactText() {
  return (
      <>
        <div className="contact__container__text">
            <h2>Skontaktuj się z nami</h2>
            <SVGDecoration className="homeTextSVGDecoration"/>
            <ContactForm />
        </div>
      </>
  );
}

export default ContactText;
