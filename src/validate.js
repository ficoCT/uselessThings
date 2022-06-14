export function validate(values) {
  const errorMessages = {};

  errorMessages.username = "";
  errorMessages.email = "";
  errorMessages.textarea = "";

  if (values.username.length === 0) {
    errorMessages.username += 'Pole nie może być puste. ';
  } else if ("values.username", values.username.includes(' ')) {
    errorMessages.username += 'Imię powinno być jednym wyrazem. ';
  }

  if (values.email.length === 0) {
    errorMessages.email += 'Pole nie może być puste. ';
  } else if ( !String(values.email)
      .toLowerCase()
      .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
    errorMessages.email += 'Email nie jest poprawny. ';
  }

  if (values.textarea.length <= 120) {
    errorMessages.textarea = 'Wiadomość musi mieć conajmniej 120 znaków. ';
  }

  return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}
