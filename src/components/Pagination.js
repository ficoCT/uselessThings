import React from 'react';

const Pagination = ({ foundationsPerPage, totalFoundations, paginate }) => {
    const pageNumbers = [];

    function handleMouseOver(e) {
        e.target.style.border = "2px solid #737373";
    }

    function handleMouseOut(e) {
        e.target.style.border = "2px solid transparent";
    }

    for (let i = 1; i <= Math.ceil(totalFoundations / foundationsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <span
                              onClick={() => paginate(number)}
                              className="pagination__single"
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                        >
                              {number}
                        </span>
                    </li>
                ))}
            </ul>
    );
};

export default Pagination;