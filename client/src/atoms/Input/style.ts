import { styled } from 'styled-components';

export const StyledInput = styled.input`
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--input-border);
  color: var(--search-text-color);
  border-radius: 0.25rem;

  &:focus {
    outline: none;
  }

  &.search {
    font-size: 1rem;
  }
`;
