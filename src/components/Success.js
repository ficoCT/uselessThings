function Success({ visibility }) {

  const success = {
    fontWeight: 'bold',
    color: 'green',
    marginTop: '30px',
  };

  const error = {
    display: 'none',
  };

  let isHidden;
  {isHidden = visibility ? success : error}

  return (
    <div style={isHidden} >
        Wiadomość została wysłana! <br />
        Wkrótce się skontaktujemy.
    </div>

  );
}

export default Success;
