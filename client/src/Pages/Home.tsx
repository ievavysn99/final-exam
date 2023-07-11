import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Pagination from '../atoms/Pagination/Pagination';
import TableHeading from '../atoms/TableHeading';
import TableRow from '../atoms/TableRow';
import FormContainer from '../molecules/FormContainer';
import Header from '../molecules/Header';
import { StyledPage, StyledTableContainer } from './style';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const itemsPerPage = 7;

  const handleShowForm = (value: boolean) => {
    setShowForm(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData);
        setTotalItems(responseData.length); // Update this line
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* <h1>Dalyvių sistema</h1>
        <Button
          mode='dark'
          content='Pridėti naują'
          onClick={addUser}
          className='add-user-button'
        ></Button> */}

      <Header setShowForm={handleShowForm} />
      <StyledPage>
        {showForm && <FormContainer />}
        <StyledTableContainer>
          <TableHeading></TableHeading>
          <TableRow
            data={data.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )}
          />
        </StyledTableContainer>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </StyledPage>
    </>
  );
};

export default Home;
