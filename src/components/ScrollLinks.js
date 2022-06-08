import {Link as ScrollLink} from "react-scroll";

function ScrollLinks() {
  return (
      <div>
          <ScrollLink
              className="scrollLinks"
              to="start"
              spy={true}
              smooth={true}
              duration={500}
          >
              Start
          </ScrollLink>
          <ScrollLink
              className="scrollLinks"
              to="whatIsItAbout"
              spy={true}
              smooth={true}
              duration={500}
          >
              O co chodzi?
          </ScrollLink>
          <ScrollLink
              className="scrollLinks"
              to="aboutUs"
              spy={true}
              smooth={true}
              duration={500}
          >
              O nas
          </ScrollLink>
          <ScrollLink
              className="scrollLinks"
              to="foundationAndOrganizations"
              spy={true} smooth={true}
              duration={500}
          >
              Fundacja i organizacje
          </ScrollLink>
          <ScrollLink
              className="scrollLinks"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
          >
              Kontakt
          </ScrollLink>
      </div>
  );
}

export default ScrollLinks;
