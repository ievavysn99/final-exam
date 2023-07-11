import { styled } from 'styled-components';

export const StyledRowContainer = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
