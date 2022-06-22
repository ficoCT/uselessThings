import HandOverThingsImportant from "./HandOverThingsImportant";
import {useState} from "react";
import thingsList  from "../database/things.js";

function ProvideDataFormStepA({text, fillForm, onChangeStep}) {

    const [checkedState, setCheckedState] = useState(
        new Array(thingsList.length).fill(false)
    );
    const [things, setThings] = useState([]);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        fillThings();
    }

    function fillThings() {
        let tempData = [];
        for (let index = 0; index < thingsList.length; index++) {
             if(checkedState[index] === true){
                 tempData.push(thingsList[index].description);
             }
        }
        setThings(tempData);
    }

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
        if (typeof fillForm !== 'function') return;
        fillForm(things);
    }

  return (
    <div>
        <HandOverThingsImportant text={text}/>
        <p>Krok 1/4</p>
        <h1>Zaznacz co chcesz oddać:</h1>
        {thingsList.map(( name, index) => {
            return (
                        <>
                            <input
                                type="checkbox"
                                id={thingsList[index].name}
                                name={thingsList[index].name}
                                value={thingsList[index].name}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label
                                htmlFor={`custom-checkbox-${index}`}
                            >
                                {thingsList[index].description}
                            </label>
                        </>
            );
        })}
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
