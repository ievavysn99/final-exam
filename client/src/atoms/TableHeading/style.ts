import { styled } from 'styled-components';

export const StyledHeadingContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 70%;
    text-align: center;
    align-items: flex-start;
    justify-content: left;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
    color: var(--text-color);
  }
`;

export const StyledLine = styled.hr`
  display: none;
  @media (min-width: 600px) {
    display: block;
    border: 1px solid var(--text-color);
  }
`;
