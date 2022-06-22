import HandOverThingsImportant from "./HandOverThingsImportant";
import {useState} from "react";

function ProvideDataFormStepA({text, fillForm, onChangeStep}) {

    const things = [
        {
            name: "Clothes",
            description: "ubrania, które nadają się do ponownego użycia"
        },
        {
            name: "UnusedClothes",
            description: "ubrania, do wyrzucenia"
        },
        {
            name: "Toys",
            description: "zabawki"
        },
        {
            name: "Books",
            description: "książki"
        },
        {
            name: "Other",
            description: "inne"
        }
    ];
    const [checkedState, setCheckedState] = useState(
        new Array(things.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    }

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
        if (typeof fillForm !== 'function') return;
        fillForm(checkedState);
    }

  return (
    <div>
        <HandOverThingsImportant text={text}/>
        <p>Krok 1/4</p>
        <h1>Zaznacz co chcesz oddać:</h1>
        {things.map(( name, index) => {
            return (
                        <>
                            <input
                                type="checkbox"
                                id={things[index].name}
                                name={things[index].name}
                                value={things[index].name}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label
                                htmlFor={`custom-checkbox-${index}`}
                            >
                                {things[index].description}
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
