import { useEffect, useState, useRef } from 'react';
import Modal from '../atoms/Modal/Modal';
import Pagination from '../atoms/Pagination/Pagination';
import TableHeading from '../atoms/TableHeading';
import TableRow from '../atoms/TableRow';
import Footer from '../molecules/Footer/Footer';
import FormContainer from '../molecules/AddFormContainer';
import Header from '../molecules/Header';
import { StyledPage, StyledTableContainer } from './style';
import { fetchUserData, updateUser, deleteUser } from '../API/api';
import { IUser } from '../../../server/src/models/user.model';
import Button from '../atoms/Button';

const Home = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [deletedUser, setDeletedUser] = useState(false);
  const itemsPerPage = 5;
  const formContainerRef = useRef(null);

  const handleShowForm = (value: boolean) => {
    setShowForm(value);
  };

  const handleCloseForm = async () => {
    const updatedData = await fetchUserData();
    setData(updatedData);
    handleShowForm(false);
    setTotalItems(updatedData.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setData(userData);
        setTotalItems(userData.length);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleUserSearch = async (value: string) => {
    setSearchValue(value);
    const fetchedData = await fetchUserData();
    const filteredData = fetchedData.filter(
      (user: IUser) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        String(user.surname).includes(value.toLowerCase()) ||
        String(user.age).includes(value.toLowerCase()) ||
        String(user.email).includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEditUser = async (userId: string, updatedUser: IUser) => {
    try {
      await updateUser(userId, updatedUser);
      const updatedData = await fetchUserData();
      setData(updatedData);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      const updatedData = await fetchUserData();
      setData(updatedData);
      setDeletedUser(true);
      setTotalItems(updatedData.length);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const closeDeletedUserModal = () => {
    setDeletedUser(false);
  };

  return (
    <>
      <Header
        setShowForm={handleShowForm}
        searchUsers={handleUserSearch}
        value={searchValue}
      />
      <StyledPage>
        {showForm && (
          <Modal>
            <div ref={formContainerRef}>
              <FormContainer onCancel={handleCloseForm} />
            </div>
          </Modal>
        )}
        {deletedUser && (
          <Modal>
            Vartotojas ištrintas sėkmingai
            <Button
              content='Gerai'
              onClick={closeDeletedUserModal}
              className='ok-button'
            ></Button>
          </Modal>
        )}
        <StyledTableContainer>
          <TableHeading></TableHeading>
          <TableRow
            data={data.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        </StyledTableContainer>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </StyledPage>
      <Footer></Footer>
    </>
  );
};

export default Home;
