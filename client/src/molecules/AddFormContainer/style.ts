import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;

  form {
    display: flex;
    flex-direction: column;
  }
  button {
    margin-top: 20px;
    align-self: flex-end;
  }
`;
export const StyledFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 10px);

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
