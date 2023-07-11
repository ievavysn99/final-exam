import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  padding: 10px;
`;

export const StyledRowInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 70%;

    div {
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
  margin-top: 24px;
  gap: 5px;
  text-align: center;
  font-size: 18px;
  align-items: center;
  color: #fff;

  button {
    align-self: center;
    width: 300px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;

    button {
      width: 150px;
    }

    &:hover {
      background-color: #29aaec;
      border-radius: 15px;
    }
  }
`;
