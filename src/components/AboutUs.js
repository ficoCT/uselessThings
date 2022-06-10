import AboutUsImage from "./AboutUsImage";
import AboutUsText from "./AboutUsText";

function AboutUs() {
  return (
    <section id="aboutUs">
        <div className="aboutUs__container">
            <AboutUsText />
            <AboutUsImage />
        </div>
    </section>

  );
}

export default AboutUs;
