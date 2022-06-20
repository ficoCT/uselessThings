function ConfirmForm({text, onChangeStep}) {

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
    }

    return (
        <div>
            <h1>Podsumowanie Twojej darowizny</h1>
            <div>
                Oddajesz:
            </div>
            <div>
                <div>
                    Adres odbioru:
                    <span>Ulica</span>
                    <span>Miasto</span>
                    <span>Kod pocztowy</span>
                    <span>Numer telefonu</span>
                </div>
                <div>
                    Termin odbioru:
                    <span>Data</span>
                    <span>Godzina</span>
                    <span>Uwagi dla kuriera</span>
                </div>
            </div>
            <div
                onClick={() => handleClick(3)}
                className=""
            >
                Wstecz
            </div>
        </div>
    );
}

export default ConfirmForm;
