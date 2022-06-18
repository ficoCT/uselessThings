export function validateMessage(values) {
  const errorMessages = {};

  errorMessages.name = "";
  errorMessages.email = "";
  errorMessages.message = "";

  if (values.name.length === 0) {
    errorMessages.name += 'Pole nie może być puste. ';
  } else if ("values.name", values.name.includes(' ')) {
    errorMessages.name += 'Imię powinno być jednym wyrazem. ';
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

  if (values.message <= 120) {
    errorMessages.message = 'Wiadomość musi mieć conajmniej 120 znaków. ';
  }

  return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}
