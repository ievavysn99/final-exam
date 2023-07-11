import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  margin: -8px -8px 0 -8px;
  background-color: var(--hf-color);
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 0 0 15px 15px;

  div {
    width: 90%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    h1 {
      color: var(--text-color);
    }
  }
`;
