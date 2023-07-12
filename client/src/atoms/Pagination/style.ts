import styled from 'styled-components';

export const StyledPaginationButton = styled.li`
  list-style: none;
  display: flex;

  a {
    position: relative;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    color: #6ea8fe;
    text-decoration: none;
    border-right: 1px solid #495057;
  }

  &.active {
    background-color: #0d6efd;
    a {
      color: #fff;
    }
  }

  &:last-child {
    a {
      border-right: none;
    }
  }
`;

export const StyledPaginationContainer = styled.ul`
  display: flex;
  border: 1px solid #495057;
  border-radius: 0.375rem;
  padding-inline-start: 0;
  overflow: hidden;
`;
