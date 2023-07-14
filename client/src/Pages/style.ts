import styled from 'styled-components';

export const StyledPage = styled.div`
  min-height: calc(100vh - 60px - 45px - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 25px 0;

  button {
    justify-content: right;
    align-items: flex-end;
  }

  @media (min-width: 600px) {
    margin: 0;
  }
`;

export const StyledTableContainer = styled.div`
  /* background-color: var(--primary-color); */
  width: 90%;
  max-width: 1100px;
  min-height: 500px;
  padding: 5px;
  border-radius: 35px;
`;
