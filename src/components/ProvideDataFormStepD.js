import HandOverThingsImportant from "./HandOverThingsImportant";
import React from "react";

function ProvideDataFormStepD({text, onChangeStep}) {

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
    }

    return (
        <div>
            <HandOverThingsImportant text={text}/>
            <p>Krok 4/4</p>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h1>
            <div>
                <div>
                    Adres odbioru:
                    <label>
                        Ulica
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Miasto
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Kod pocztowy
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Numer telefonu
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    Termin odbioru:
                    <label>
                        Data
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Godzina
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Uwagi dla kuriera
                        <textarea name="name" />
                    </label>
                </div>
            </div>
            <div
                onClick={() => handleClick(2)}
                className=""
            >
                Wstecz
            </div>
            <div
                onClick={() => handleClick(4)}
                className=""
            >
                Dalej
            </div>
        </div>
    );
}

export default ProvideDataFormStepD;
