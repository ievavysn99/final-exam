import styled from 'styled-components';

export const StyledPage = styled.div`
  min-height: calc(100vh - 35px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    justify-content: right;
    align-items: flex-end;
  }
`;

export const StyledTableContainer = styled.div`
  background-color: #0e8ae8;
  width: 90%;
  max-width: 1100px;
  margin: auto;
  padding: 30px 5px;
  border-radius: 35px;
  box-shadow: 0px 15px 10px #eee;
`;
