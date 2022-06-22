import thingsList  from "../database/things.js";

function ConfirmForm({donate, onChangeStep}) {

    function handleClick(id) {
        if (typeof onChangeStep !== 'function') return;
        onChangeStep(id);
    }

    return (
        <div>
            <h1>Podsumowanie Twojej darowizny</h1>
            <div>
                Oddajesz: {donate.trashBags} worki {', '} {donate.things} {', '} {donate.peopleAndOrganization.person}
                Dla lokalizacji: {donate.peopleAndOrganization.location}
            </div>
            <div>
                <div>
                    Adres odbioru:
                    <span>Ulica {donate.delivery.street}</span>
                    <span>Miasto {donate.delivery.city}</span>
                    <span>Kod pocztowy {donate.delivery.zipCode}</span>
                    <span>Numer telefonu {donate.delivery.phoneNumber}</span>
                </div>
                <div>
                    Termin odbioru:
                    <span>Data {donate.delivery.date}</span>
                    <span>Godzina {donate.delivery.hour}</span>
                    <span>Uwagi dla kuriera {donate.delivery.remarks}</span>
                </div>
            </div>
            <div
                onClick={() => handleClick(3)}
                className=""
            >
                Wstecz
            </div>
            <div
                onClick={() => handleClick(5)}
                className=""
            >
                Potwierdzam
            </div>
        </div>
    );
}

export default ConfirmForm;
