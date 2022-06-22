import Contact from "./Contact";
import HandOverThingsHeader from "./HandOverThingsHeader";
import {useState} from "react";
import ConfirmForm from "./ConfirmForm";
import ProvideDataFormStepA from "./ProvideDataFormStepA";
import ProvideDataFormStepB from "./ProvideDataFormStepB";
import ProvideDataFormStepC from "./ProvideDataFormStepC";
import ProvideDataFormStepD from "./ProvideDataFormStepD";
import Confirmation from "./Confirmation";

function HandOverThings() {

  const [id, setId] = useState(0);
  const [donate, setDonate] = useState({things: [], trashBags: 1, peopleAndOrganization: {}, delivery: {} });
  const textStep = [
      "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
      "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować znajdziesz TUTAJ.",
      "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
      "Podaj adres oraz termin odbioru rzeczy."
  ];

  const tabForm = [
      <ProvideDataFormStepA text={textStep[0]} fillForm={fillFormA} onChangeStep={handleClick} />,
      <ProvideDataFormStepB text={textStep[1]} fillForm={fillFormB} onChangeStep={handleClick} />,
      <ProvideDataFormStepC text={textStep[2]} fillForm={fillFormC} onChangeStep={handleClick} />,
      <ProvideDataFormStepD text={textStep[3]} fillForm={fillFormD} onChangeStep={handleClick} />,
      <ConfirmForm donate={donate} onChangeStep={handleClick} />,
      <Confirmation />
  ];

  function handleClick(id) {
      setId(id);
  }

  function fillFormA(things) {
      let tempData = {...donate};
      tempData.things = things;
      setDonate(tempData);
  }

  function fillFormB(trashBags) {
      let tempData = {...donate};
      tempData.trashBags = trashBags;
      setDonate(tempData);
  }

  function fillFormC(peopleAndOrganization) {
      let tempData = {...donate};
      tempData.peopleAndOrganization = peopleAndOrganization;
      setDonate(tempData);
  }

  function fillFormD(delivery) {
      let tempData = {...donate};
      tempData.delivery = delivery;
      setDonate(tempData);
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
