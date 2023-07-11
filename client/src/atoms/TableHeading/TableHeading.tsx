import { StyledHeadingContainer, StyledLine } from './style';

const TableHeading = () => {
  return (
    <>
      <StyledHeadingContainer>
        <div>Vardas</div>
        <div>Pavardė</div>
        <div>El. paštas</div>
        <div>Amžius</div>
      </StyledHeadingContainer>
      <StyledLine />
    </>
  );
};

export default TableHeading;
