import styled from 'styled-components';

export const StyledPaginationButton = styled.button`
  background-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  color: white;
  padding: 5px;

  &.active {
    border: 2px solid black;
    background-color: var(--selected-button-color);
  }

  &:hover {
    cursor: pointer;
    background-color: var(--hover-color);
  }
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--primary-color);
  cursor: pointer;
`;
