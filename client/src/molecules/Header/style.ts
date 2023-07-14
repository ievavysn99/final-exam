import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  color: var(--text-color);
  div {
    width: 90%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    input {
      width: 100%;
    }
  }

  @media (min-width: 602px) {
    height: 40px;
    div {
      flex-direction: row;
      justify-content: space-between;
      input {
        width: 70%;
      }
    }
  }
`;
