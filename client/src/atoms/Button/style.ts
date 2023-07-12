import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #0d6efd;
  color: #fff;
  border: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out;

  &.cancel {
    background-color: #6c757d;
  }

  &:hover {
    background-color: #0b5ed7;

    &.cancel {
      background-color: #343a40;
    }
  }
`;
