import {ReactComponent as SVGDecoration} from "../assets/Decoration.svg";

function HomeText() {
  return (
      <>
        <div className="homeText">
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce
            <SVGDecoration className="homeTextSVGDecoration"/>
        </div>

      </>
  );
}

export default HomeText;
