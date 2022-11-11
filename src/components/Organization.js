import OrganizationalUnit from "./OrganizationalUnit";
import organizationsList  from "../database/organizations.js";
import {useState} from "react";
import Pagination from "./Pagination";

function Organization() {

    const [organizations, setOrganizations] = useState(organizationsList);
    const [currentPage, setCurrentPage] = useState(1);
    const [organizationsPerPage] = useState(3);

    const indexOfLastOrganization = currentPage * organizationsPerPage;
    const indexOfFirstOrganization = indexOfLastOrganization - organizationsPerPage;
    const currentOrganizations = organizations.slice(indexOfFirstOrganization, indexOfLastOrganization);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <p className="organizationalUnits__description container">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
                labore et dolore magna aliqua.
            </p>
            {currentOrganizations.map(organization => (
                <OrganizationalUnit key={organization.id} unitName={"Organizacja"} unitTarget={""} unit={organization}/>
            ))}
            <Pagination
                foundationsPerPage={organizationsPerPage}
                totalFoundations={organizations.length}
                paginate={paginate}
            />
        </>
  );
}

export default Organization;
