import OrganizationalUnit from "./OrganizationalUnit";
import fundationsList  from "../database/fundations.js";

function Foundation() {

  console.log("fundationsList", fundationsList);

  return (
    <>
        <p className="statistics__description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
            którymi współpracujemy. Możesz sprawdzić czym się zajmują,
            komu pomagają i czego potrzebują.
        </p>
        {fundationsList.map(fundation => (
            fundation.name
        ))}
    </>
  );
}

export default Foundation;
