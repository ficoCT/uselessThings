import {Link} from "react-router-dom";
import {ReactComponent as SVGDecoration} from "../assets/decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

function  WhatIsItAbout() {
  return (
    <section id="whatIsItAbout">
            <div className="whatIsItAbout__container__columns">
                <div className="whatIsItAbout__header">
                    Wystarczą 4 proste kroki
                    <SVGDecoration className="homeTextSVGDecoration"/>
                </div>
                <div className="whatIsItAbout__container">
                    <div className="container">
                        <div className="whatIsItAbout__container__row">
                            <div className="whatIsItAbout__single">
                                <img src={Icon1} alt="Icon" className="whatIsItAbout__icon"/>
                                <h2>Wybierz rzeczy</h2>
                                <p className="whatIsItAbout__description">
                                    ubrania, zabawki, <br /> sprzęt i inne
                                </p>
                            </div>
                            <div className="whatIsItAbout__single">
                                <img src={Icon2} alt="Icon" className="whatIsItAbout__icon"/>
                                <h2>Spakuj je</h2>
                                <p className="whatIsItAbout__description">
                                    skorzystaj z <br /> worków na śmieci
                                </p>
                            </div>
                            <div className="whatIsItAbout__single">
                                <img src={Icon3} alt="Icon" className="whatIsItAbout__icon"/>
                                <h2>Zdecyduj komu <br /> chcesz pomóc</h2>
                                <p className="whatIsItAbout__description">
                                    wybierz zaufane <br /> miejsce
                                </p>
                            </div>
                            <div className="whatIsItAbout__single">
                                <img src={Icon4} alt="Icon" className="whatIsItAbout__icon"/>
                                <h2>Zamów kuriera</h2>
                                <p className="whatIsItAbout__description">
                                    kurier przyjedzie <br /> w dogodnym terminie
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whatIsItAbout__links">
                    <Link className="linksActions" to="/login">ODDAJ <br /> RZECZY</Link>
                </div>
            </div>
    </section>
  );
}

export default  WhatIsItAbout;
