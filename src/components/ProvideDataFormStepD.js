import HandOverThingsImportant from "./HandOverThingsImportant";
import React from "react";
import {useState} from "react";

function ProvideDataFormStepD({text, fillForm, onChangeStep}) {

    const [delivery, setDelivery] = useState({
        street:"",
        city:"",
        zipCode:"",
        phoneNumber:"",
        date:"",
        hour:"",
        remarks:""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setDelivery(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
        if (typeof fillForm !== 'function') return;
        fillForm(delivery);
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
                        <input type="text"
                               name="street"
                               value={delivery.street}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        Miasto
                        <input type="text"
                               name="city"
                               value={delivery.city}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        Kod pocztowy
                        <input type="text"
                               name="zipCode"
                               pattern="[0-9]{2}-[0-9]{3}]"
                               value={delivery.zipCode}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        Numer telefonu
                        <input type="tel"
                               name="phoneNumber"
                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                               value={delivery.phoneNumber}
                               onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    Termin odbioru:
                    <label>
                        Data
                        <input type="date"
                               name="date"
                               value={delivery.date}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        Godzina
                        <input type="time"
                               name="hour"
                               value={delivery.hour}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        Uwagi dla kuriera
                        <textarea
                            name="remarks"
                            value={delivery.remarks}
                            onChange={handleChange}
                        />
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
