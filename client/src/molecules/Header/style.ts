import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #212529;

  div {
    width: 90%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    h1 {
      color: #212529;
    }
  }
`;
