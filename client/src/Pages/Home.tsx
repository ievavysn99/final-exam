import Button from '../atoms/Button';
import TableHeading from '../atoms/TableHeading';
import TableRow from '../atoms/TableRow/TableRow';
import { StyledTableContainer } from './style';

const Home = () => {
  return (
    <>
      <Button mode='light' content='Pridėti naują'></Button>
      <StyledTableContainer>
        <TableHeading></TableHeading>
        <TableRow></TableRow>
      </StyledTableContainer>
    </>
  );
};

export default Home;
