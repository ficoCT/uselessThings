import HomeHeader from "./HomeHeader";
import WhatIsItAbout from "./WhatIsItAbout";
import AboutUs from "./AboutUs";
import FoundationAndOrganizations from "./FoundationAndOrganizations";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <HomeHeader />  < br/>
      {/*<HomeThreeColumns />  < br/>*/}
      <WhatIsItAbout />  < br/>
      <AboutUs />  < br/>
      <FoundationAndOrganizations />  < br/>
      <Contact />  < br/>
    </>

  );
}

export default Home;
