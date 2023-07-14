import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
`;
export const StyledFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 485px) {
    margin: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledFormItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const StyledUserSavedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  gap: 20px;

  button {
    width: 100px;
    margin: 0 auto;
  }
`;
