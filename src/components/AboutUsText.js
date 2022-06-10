import {ReactComponent as SVGDecoration} from "../assets/Decoration.svg";
import {ReactComponent as SVGSignature} from "../assets/Signature.svg";
import Signature from "../assets/Signature.svg";

function AboutUsText() {
  return (
    <div className="aboutUs__container__text">
        <h2>O nas</h2>
        <SVGDecoration className="homeTextSVGDecoration"/>
        <p className="aboutUs__container__text__description">
            Nori grape silver beet broccoli kombu beet <br />
            greens fava bean potato quandong celery. Bunya <br />
            nuts black-eyed pea prairie turnip leek lentil <br />
            turnip greens parsnip.
        </p>
        <img src={Signature} alt="Icon" className="aboutUs__container__text__SVGSignature"/>
    </div>
  );
}

export default AboutUsText;
