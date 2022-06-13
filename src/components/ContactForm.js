function ContactForm() {
  return (
      <form className="contact__container__text__form">
          <div className="contact__container__text__form__labels">
              <label className="contact__container__text__form__labels__single">
                  <span>Wpisz swoje imię</span>
                  <input type="text" value={"Rafał"} className="contact__container__text__form__labels__single__input"/>
              </label>
              <label className="contact__container__text__form__labels__single">
                  <span>Wpisz swój email</span>
                  <input type="text" value={"abc@xyz.pl"} className="contact__container__text__form__labels__single__input"/>
              </label>
          </div>
          <label className="contact__container__text__form__labels__single">
              Wpisz swoją wiadomość
              <textarea value={"To jest jakiś tekst"} className="contact__container__text__form__labels__single__textarea"/>
          </label>
          <input type="submit" value="Wyślij" className="contact__container__text__form__labels__single__textarea__button"/>
      </form>
  );
}

export default ContactForm;
