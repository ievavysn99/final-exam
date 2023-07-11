import styled from 'styled-components';

export const StyledPage = styled.div`
  min-height: calc(100vh - 60px - 45px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  button {
    justify-content: right;
    align-items: flex-end;
  }
`;

export const StyledTableContainer = styled.div`
  background-color: var(--primary-color);
  width: 90%;
  max-width: 1100px;
  min-height: 435px;
  padding: 30px 5px;
  border-radius: 35px;
  box-shadow: 0px 15px 10px #eee;
`;
