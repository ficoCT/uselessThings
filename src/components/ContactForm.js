import {useState} from "react";
import {Input} from "./Input";
import { validateMessage } from '../validateMessage';
import {Textarea} from "./Textarea";

function ContactForm({ handleVisibility }) {
    const initialValues = { name: "", email: "", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."};
    const [values, setValues] = useState(initialValues);
    const [errorMessages, setErrorMessages] = useState(null);
    const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMessages(validateMessage(values));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch(`${API}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (typeof handleVisibility === 'function') {
                    handleVisibility(true);
                }

            })
            .catch(error => {
                console.log(error);
            });

    };

     return (
          <form onSubmit={handleSubmit} className="contact__container__text__form">
              <div className="contact__container__text__form__labels">
                  <Input
                      label="Wpisz swoje imię"
                      name="name"
                      type="text"
                      placeholder="Rafał"
                      value={values.name}
                      errorMessage={errorMessages?.name}
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
                  // placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  value={values.message}
                  errorMessage={errorMessages?.message}
                  onChange={handleChange}
              />
              <input type="submit" value="Wyślij" className="contact__container__text__form__labels__single__textarea__button"/>
          </form>
     );
}

export default ContactForm;
