import {useState} from "react";
import {Input} from "./Input";
import { validate } from '../validate';
import {Textarea} from "./Textarea";

function ContactForm({ onSubmit }) {
    const initialValues = { username: "", email: "", textarea: "" };
    const [values, setValues] = useState(initialValues);
    const [errorMessages, setErrorMessages] = useState(null);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setValues(prevValues => ({
          ...prevValues,
          [name]: value,
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      const errorMessages = validate(values);
      setErrorMessages(errorMessages);

      // if (errorMessages) return;

      if (typeof onSubmit === 'function') {
          onSubmit(values);
      }
  };

  return (
      <form onSubmit={handleSubmit} className="contact__container__text__form">
          <div className="contact__container__text__form__labels">
              <Input
                  label="Wpisz swoje imię"
                  name="username"
                  type="text"
                  placeholder="Rafał"
                  value={values.username}
                  errorMessage={errorMessages?.username}
                  onChange={handleChange}
              />
              <Input
                  label="Wpisz swój email"
                  name="email"
                  type="email"
                  placeholder="abc@xyz.pl"
                  value={values.email}
                  errorMessage={errorMessages?.email}
                  onChange={handleChange}
              />
          </div>
          <Textarea
              label="Wpisz swoją wiadomość"
              name="textarea"
              type="textarea"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              value={values.textarea}
              errorMessage={errorMessages?.textarea}
              onChange={handleChange}
          />
          <input type="submit" value="Wyślij" className="contact__container__text__form__labels__single__textarea__button"/>
      </form>
  );
}

export default ContactForm;
