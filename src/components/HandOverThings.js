import Contact from "./Contact";
import HandOverThingsHeader from "./HandOverThingsHeader";
import {useState} from "react";
import ConfirmForm from "./ConfirmForm";
import ProvideDataFormStepA from "./ProvideDataFormStepA";
import ProvideDataFormStepB from "./ProvideDataFormStepB";
import ProvideDataFormStepC from "./ProvideDataFormStepC";
import ProvideDataFormStepD from "./ProvideDataFormStepD";

function HandOverThings() {

  const [id, setId] = useState(0);
  const [thingsForm, setThingsForm] = useState(0);
  const textStep = [
      "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
  ];

  const tabForm = [
      <ProvideDataFormStepA text={textStep[0]} fillForm={fillFormA} onChangeStep={handleClick} />,
      <ProvideDataFormStepB text={textStep[0]} fillForm={fillFormB} onChangeStep={handleClick} />,
      <ProvideDataFormStepC text={textStep[0]} fillForm={fillFormC} onChangeStep={handleClick} />,
      <ProvideDataFormStepD text={textStep[0]} fillForm={fillFormD} onChangeStep={handleClick} />,
      <ConfirmForm onChangeStep={handleClick} />
  ];

  function handleClick(id) {
      setId(id);
  }

  function fillFormA(things) {
      console.log("fillFormA", things);
  }

  function fillFormB(trashBags) {
      console.log("fillFormB", trashBags);
  }

  function fillFormC(peopleAndOrganization) {
      console.log("peopleAndOrganization", peopleAndOrganization);
  }

    function fillFormD(delivery) {
        console.log("delivery", delivery);
    }

  return (
      <>
          <HandOverThingsHeader />
          { tabForm[id] }
          <Contact />  < br/>
      </>
  );
}

export default HandOverThings;
