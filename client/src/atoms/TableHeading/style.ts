import { styled } from 'styled-components';

export const StyledHeadingContainer = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: flex;

    border-top: 1px solid #dee2e6;
    border-bottom: 3px solid #dee2e6;

    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1.5fr 0.5fr;
      width: 70%;
      h3 {
        padding: 0.75rem;
        width: 70%;
        color: #212529;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5;
        text-align: left;
      }
    }
  }
`;
