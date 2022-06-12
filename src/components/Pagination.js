import React from 'react';

const Pagination = ({ foundationsPerPage, totalFoundations, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFoundations / foundationsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
            <ul className="">
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <span onClick={() => paginate(number)} className="">
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
    );
};

export default Pagination;