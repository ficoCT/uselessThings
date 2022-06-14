function OrganizationalUnit({unitName, unitTarget, unit}) {

  return (
    <div className="organizationalUnit__single container">
         <div className="organizationalUnit__single__unit">
             <div className="organizationalUnit__single__unit__name">
                 {unitName} {" "} "{unit.name}"
             </div>
             <div className="organizationalUnit__single__unit__description">
                 {unitTarget} {" "} {unit.description}
             </div>
         </div>
        <div className="organizationalUnit__single__things">
            <p className="organizationalUnit__single__things__text">
                {unit.things}
            </p>
        </div>
    </div>
  );
}

export default OrganizationalUnit;
