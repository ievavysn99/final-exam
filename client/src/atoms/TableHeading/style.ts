import { styled } from 'styled-components';

export const StyledHeadingContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
