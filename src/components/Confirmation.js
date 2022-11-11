import {ReactComponent as SVGDecoration} from "../assets/Decoration.svg";

function Confirmation() {

  return (
    <div>
        Dziękujemy za przesłanie formularza <br/>
        Na maila prześlemy wszelkie <br/>
        informacje o odbiorze.
        <SVGDecoration className="homeTextSVGDecoration"/>
    </div>
  );
}

export default Confirmation;
