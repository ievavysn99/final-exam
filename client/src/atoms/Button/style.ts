import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--main-button-color);
  color: var(--button-text-color);
  border: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out;

  &.ok-button {
    width: 100px;
    margin: 0 auto;
  }

  &.cancel {
    background-color: var(--button-cancel);
  }

  &.success {
    background-color: var(--button-success);
  }

  &.danger {
    background-color: var(--button-danger);
  }

  &:hover {
    background-color: var(--button-hover);

    &.cancel {
      background-color: var(--button-cancel-hover);
    }

    &.success {
      background-color: var(--button-success-hover);
    }

    &.danger {
      background-color: var(--button-danger-hover);
    }
  }
`;
