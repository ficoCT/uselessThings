function OrganizationalUnit({unit}) {

  return (
    <div className="foundations__single container">
         <div className="foundations__single__unit__single__unit">
             <div className="foundations__single__unit__name">
                 {unit.name}
             </div>
             <div className="foundations__single__unit__description">
                 {unit.description}
             </div>
         </div>
        <div className="foundations____single__things">
            {unit.things}
        </div>
    </div>
  );
}

export default OrganizationalUnit;
