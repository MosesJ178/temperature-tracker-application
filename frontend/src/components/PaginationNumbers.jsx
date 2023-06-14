import React, { useState } from 'react';

const PaginationNumbers = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav className='mb-2 flex mt-10'>
      <span>----</span><ul className="pagination flex">
        {pageNumbers.map((number) => (
          <li key={number} className={`border border-black px-2 ${number === currentPage ? 'font-bold' : ''}`}>
            <button className="page-link" onClick={() => handleClick(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul><span>----</span>
    </nav>
  );
};

export default PaginationNumbers;

