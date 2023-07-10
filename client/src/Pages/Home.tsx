import { useState } from 'react';
import Button from '../atoms/Button';
import TableHeading from '../atoms/TableHeading';
import TableRow from '../atoms/TableRow';
import FormContainer from '../molecules/FormContainer';
import { StyledTableContainer } from './style';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const addUser = () => {
    setShowForm(true);
  };

  return (
    <>
      <Button mode='light' content='Pridėti naują' onClick={addUser}></Button>
      {showForm && <FormContainer />}
      <StyledTableContainer>
        <TableHeading></TableHeading>
        <TableRow></TableRow>
      </StyledTableContainer>
    </>
  );
};

export default Home;
