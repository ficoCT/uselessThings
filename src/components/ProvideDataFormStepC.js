import HandOverThingsImportant from "./HandOverThingsImportant";
import React from "react";
import {useState} from "react";

function ProvideDataFormStepC({text, fillForm, onChangeStep}) {

    const [locationAndPerson, setLocationAndPerson] = useState({location:"", person:"", organization:""});

    function handleChangePerson(person) {
        let tempData = {...locationAndPerson};
        tempData.person = tempData.person + " " + person;
        setLocationAndPerson(tempData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLocationAndPerson(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
        if (typeof fillForm !== 'function') return;
        fillForm(locationAndPerson);
    }

    return (
        <div>
            <HandOverThingsImportant text={text}/>
            <p>Krok 3/4</p>
            <label>
                <h1>Lokalizacja:</h1>
                <select name="location" value={locationAndPerson.location} onChange={handleChange}>
                    <option value="Poznan">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Krakow">Kraków</option>
                    <option value="Wroclaw">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                </select>
            </label>
            <p>Komu chcesz pomóc?</p>
            <div onClick={() => handleChangePerson("dzieciom")}>dzieciom</div>
            <div onClick={() => handleChangePerson("samotnym matkom")}>samotnym matkom</div>
            <div onClick={() => handleChangePerson("bezdomnym")}>bezdomnym</div>
            <div onClick={() => handleChangePerson("niepełnosprawnym")}>niepełnosprawnym</div>
            <div onClick={() => handleChangePerson("osobom starszym")}>osobom starszym</div>
            <label>
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
                <input
                    type="text"
                    name="organization"
                    value={locationAndPerson.organization}
                    onChange={handleChange}
                />
            </label>
            <div
                onClick={() => handleClick(1)}
                className=""
            >
                Wstecz
            </div>
            <div
                onClick={() => handleClick(3)}
                className=""
            >
                Dalej
            </div>
        </div>
    );
}

export default ProvideDataFormStepC;
