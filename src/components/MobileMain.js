import MobileMainActions from "./MobileMainActions";
import MobileMainWho from "./MobileMainWho";
import MobileMainSteps from "./MobileMainSteps";
import MobileMainGood from "./MobileMainGood";

function MobileMain() {
  return (
    <div className="mobileHome__main">
        <MobileMainActions />
        <MobileMainSteps />
        <MobileMainWho />
        <MobileMainGood />
    </div>
  );
}

export default MobileMain;
