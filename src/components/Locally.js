import OrganizationalUnit from "./OrganizationalUnit";
import locallyList  from "../database/locally.js";
import {useState} from "react";
import Pagination from "./Pagination";
import foundationsList from "../database/foundations";

function Locally() {

  const [locally, setLocally] = useState(locallyList);
  const [currentPage, setCurrentPage] = useState(1);
  const [locallyPerPage] = useState(3);

  const indexOfLastLocally = currentPage * locallyPerPage;
  const indexOfFirstFoundation = indexOfLastLocally - locallyPerPage;
  const currentLocally = locally.slice(indexOfFirstFoundation, indexOfLastLocally);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
        <p className="organizationalUnits__description container">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
            labore et dolore magna aliqua.
        </p>
        {currentLocally.map(locally => (
            <OrganizationalUnit key={locally.id} unitName={"Zbiórka"} unitTarget={""} unit={locally}/>
        ))}
        <Pagination
            foundationsPerPage={locallyPerPage}
            totalFoundations={locally.length}
            paginate={paginate}
        />
    </>
  );
}

export default Locally;
