import HomeThreeColumns from "./HomeThreeColumns";
import HomeHeader from "./HomeHeader";
import { Link, Outlet } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import Contact from "./Contact";
import Start from "./Start";
import AboutUs from "./AboutUs";
import WhatIsItAbout from "./WhatIsItAbout";
import FoundationAndOrganizations from "./FoundationAndOrganizations";

function Home() {
  return (
    <>
      <Link to="/login">Zaloguj</Link> {' '}
      <Link to="/register">Załóż konto</Link> {' '}  < br />
      <ScrollLink to="start" spy={true} smooth={true} duration={500} >Start</ScrollLink> {' '}
      <ScrollLink to="whatIsItAbout" spy={true} smooth={true} duration={500} >O co chodzi?</ScrollLink> {' '}
      <ScrollLink to="aboutUs" spy={true} smooth={true} duration={500} >O nas</ScrollLink> {' '}
      <ScrollLink to="foundationAndOrganizations" spy={true} smooth={true} duration={500} >Fundacja i organizacje</ScrollLink> {' '}
      <ScrollLink to="contact" spy={true} smooth={true} duration={500} >Kontakt</ScrollLink>
      < br />
      <Link to="/login">ODDAJ RZECZY</Link>
      < br />
      <Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link> < br/>
      <Outlet />  < br/>
      {/*<HomeHeader />  < br/>*/}
      {/*<HomeThreeColumns />  < br/>*/}
      <Start />  < br/>
      <WhatIsItAbout />  < br/>
      <AboutUs />  < br/>
      <FoundationAndOrganizations />  < br/>
      <Contact />  < br/>
    </>

  );
}

export default Home;
