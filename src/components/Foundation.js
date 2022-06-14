import OrganizationalUnit from "./OrganizationalUnit";
import foundationsList  from "../database/foundations.js";
import {useState} from "react";
import Pagination from "./Pagination";

function Foundation() {

  const [foundations, setFoundations] = useState(foundationsList);
  const [currentPage, setCurrentPage] = useState(1);
  const [foundationsPerPage] = useState(3);

  const indexOfLastFoundation = currentPage * foundationsPerPage;
  const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
  const currentFoundations = foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
        <p className="organizationalUnits__description container">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
            którymi współpracujemy. Możesz sprawdzić czym się zajmują,
            komu pomagają i czego potrzebują.
        </p>
        {currentFoundations.map(foundation => (
            <OrganizationalUnit key={foundation.id} unitName={"Fundacja"} unitTarget={"Cel i misja:"} unit={foundation}/>
        ))}
        <Pagination
            foundationsPerPage={foundationsPerPage}
            totalFoundations={foundations.length}
            paginate={paginate}
        />
    </>
  );
}

export default Foundation;
