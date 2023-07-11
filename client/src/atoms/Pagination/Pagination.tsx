import { useState } from 'react';
import { StyledPaginationButton } from './style';

interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(totalItems, 'total items');
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPaginationNumbers = () => {
    const paginationNumbers = [];

    // Calculate the start and end page numbers based on the current page
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 3) {
      if (currentPage <= 2) {
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    if (startPage > 1) {
      paginationNumbers.push(
        <StyledPaginationButton
          key={1}
          className={currentPage === 1 ? 'active' : ''}
          onClick={() => handlePageChange(1)}
        >
          1
        </StyledPaginationButton>
      );

      if (startPage > 2) {
        paginationNumbers.push(<span key='ellipsis-start'>...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(
        <StyledPaginationButton
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </StyledPaginationButton>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationNumbers.push(<span key='ellipsis-end'>...</span>);
      }

      paginationNumbers.push(
        <StyledPaginationButton
          key={totalPages}
          className={currentPage === totalPages ? 'active' : ''}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </StyledPaginationButton>
      );
    }

    return paginationNumbers;
  };

  //   return (
  //     <ul className='pagination'>
  //       <li
  //         className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
  //         onClick={() => handlePageChange(currentPage - 1)}
  //       >
  //         Ankstesnis
  //       </li>
  //       {renderPaginationNumbers()}
  //       <li
  //         className={`pagination-item ${
  //           currentPage === totalPages ? 'disabled' : ''
  //         }`}
  //         onClick={() => handlePageChange(currentPage + 1)}
  //       >
  //         Kitas
  //       </li>
  //     </ul>
  //   );
  return (
    <ul className='pagination'>
      {currentPage !== 1 && (
        <li
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Ankstesnis
        </li>
      )}
      {renderPaginationNumbers()}
      {currentPage !== totalPages && (
        <li
          className={`pagination-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Kitas
        </li>
      )}
    </ul>
  );
};

export default Pagination;

//WORKS
//   const renderPaginationNumbers = () => {
//     const paginationNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       paginationNumbers.push(
//         <button
//           key={i}
//           className={currentPage === i ? 'active' : ''}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </button>
//       );
//     }

//     return paginationNumbers;
//   };
//WORKS
