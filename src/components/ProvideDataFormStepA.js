import HandOverThingsImportant from "./HandOverThingsImportant";
import {Checkbox} from "./Checkbox";
import {useState} from "react";

function ProvideDataFormStepA({text, onChangeStep}) {

    const [values, setValues] = useState({clothes: false});

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
    }

    function handleChange(name, value) {
        setValues(things => ({ ...things, [`${name}`]: !value}));
        console.log("values", values);
    }

  return (
    <div>
        <HandOverThingsImportant text={text}/>
        <p>Krok 1/4</p>
        <h1>Zaznacz co chcesz oddać:</h1>
        <Checkbox
            label="ubrania, które nadają się do ponownego użycia"
            name="clothes"
            value={values.clothes}
            onChange={handleChange}
        />
        <div
            onClick={() => handleClick(1)}
            className=""
        >
            Dalej
        </div>
    </div>
  );
}

export default ProvideDataFormStepA;
