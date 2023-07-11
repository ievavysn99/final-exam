import { useState } from 'react';
import { StyledPaginationButton, StyledPaginationContainer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <StyledPaginationContainer className='pagination'>
      {currentPage !== 1 && (
        <div
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      )}
      {renderPaginationNumbers()}
      {currentPage !== totalPages && (
        <div
          className={`pagination-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      )}
    </StyledPaginationContainer>
  );
};

export default Pagination;
