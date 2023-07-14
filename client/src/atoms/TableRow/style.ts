import { styled } from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledRowInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 700px) {
    margin: 0.75rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr 0.5fr;
    width: 70%;
    text-align: left;

    div {
      margin: 0.75rem;
      max-width: 200px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
  }
`;

export const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  font-size: 1rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--table-border);
  margin: 10px 0;

  &:last-child: {
    border-bottom: none;
  }

  button {
    align-self: center;
    width: 300px;
    margin: 5px;
  }

  @media (min-width: 700px) {
    margin: 0;
    flex-direction: row;
    justify-content: center;

    button {
      width: 120px;
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  @media (min-width: 700px) {
    width: 30%;
  }
`;

export const StyledDeleteButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  div &.buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledEditable = styled.div`
  background-color: var(--editable-color);
  &:focus {
    outline: none;
  }
`;
