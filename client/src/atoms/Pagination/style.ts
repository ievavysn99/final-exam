import styled from 'styled-components';

export const StyledPaginationButton = styled.li`
  list-style: none;
  display: flex;

  a {
    position: relative;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    color: var(--pagination-text-color);
    text-decoration: none;
    border-right: 1px solid var(--pagination-border-color);
  }

  &.active {
    background-color: var(--main-button-color);
    a {
      color: var(--button-text-color);
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
  border: 1px solid var(--pagination-border-color);
  border-radius: 0.375rem;
  padding-inline-start: 0;
  overflow: hidden;
`;
