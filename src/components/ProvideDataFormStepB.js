import HandOverThingsImportant from "./HandOverThingsImportant";

function ProvideDataFormStepB({text, onChangeStep}) {

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
    }

    return (
        <div>
            <HandOverThingsImportant text={text}/>
            <p>Krok 2/4</p>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <label>
                Liczba 60l worków:
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <div
                onClick={() => handleClick(0)}
                className=""
            >
                Wstecz
            </div>
            <div
                onClick={() => handleClick(2)}
                className=""
            >
                Dalej
            </div>
        </div>
    );
}

export default ProvideDataFormStepB;
