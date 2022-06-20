import Contact from "./Contact";
import HandOverThingsHeader from "./HandOverThingsHeader";
import HandOverThingsImportant from "./HandOverThingsImportant";
import {useState} from "react";
import ConfirmForm from "./ConfirmForm";
import ProvideDataFormStepA from "./ProvideDataFormStepA";
import ProvideDataFormStepB from "./ProvideDataFormStepB";
import ProvideDataFormStepC from "./ProvideDataFormStepC";
import ProvideDataFormStepD from "./ProvideDataFormStepD";

function HandOverThings() {

  const [id, setId] = useState(0);
  const textStepA = "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
  const tabForm = [
      <ProvideDataFormStepA text={textStepA} onChangeStep={handleClick} />,
      <ProvideDataFormStepB text={textStepA} onChangeStep={handleClick} />,
      <ProvideDataFormStepC text={textStepA} onChangeStep={handleClick} />,
      <ProvideDataFormStepD text={textStepA} onChangeStep={handleClick} />,
      <ConfirmForm onChangeStep={handleClick} />
  ];

  function handleClick(id) {
      setId(id);
      console.log("id", id);
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
