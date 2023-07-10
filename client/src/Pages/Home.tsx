import Button from '../atoms/Button';
import TableHeading from '../atoms/TableHeading';
import { StyledTableContainer } from './style';

const Home = () => {
  return (
    <>
      <Button mode='light' content='Pridėti naują'></Button>
      <StyledTableContainer>
        <TableHeading></TableHeading>
      </StyledTableContainer>
    </>
  );
};

export default Home;
