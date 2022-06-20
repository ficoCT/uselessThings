function HandOverThingsImportant({text}) {
  return (
     <section className="handOverThings__important">
         <div className="handOverThings__important__text container">
           <p className="handOverThings__important__text__title" >Ważne!</p>
           {text}
         </div>
     </section>
  );
}

export default HandOverThingsImportant;
