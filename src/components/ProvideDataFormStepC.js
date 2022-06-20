import HandOverThingsImportant from "./HandOverThingsImportant";
import React from "react";

function ProvideDataFormStepC({text, onChangeStep}) {

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
    }

    return (
        <div>
            <HandOverThingsImportant text={text}/>
            <p>Krok 3/4</p>
            <label>
                <h1>Lokalizacja:</h1>
                <select>
                    <option value="Poznan">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Krakow">Kraków</option>
                    <option value="Wroclaw">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                </select>
            </label>
            <p>Komu chcesz pomóc?</p>
            <div>dzieciom</div>
            <div>samotnym matkom</div>
            <div>bezdomnym</div>
            <div>niepełnosprawnym</div>
            <div>osobom starszym</div>
            <label>
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
                <input type="text" name="name" />
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
