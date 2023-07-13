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

  //handlina, ar rodys add user formą
  const handleShowForm = (value: boolean) => {
    setShowForm(value);
  };

  const handleCloseForm = async () => {
    const updatedData = await fetchUserData();
    setData(updatedData);
    handleShowForm(false);
    setTotalItems(updatedData.length);
    console.log(totalItems);
  };

  //pafetchina data iš API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        //settina data
        setData(userData);
        //nustato users masyvo ilgį, kad žinotų, kaip apskaičiuot, kiek bus psl paginatione
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

  //nustato, kuris page parinktas
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //editina userį. Paima ID ir updatina userį su funkcija iš API folderio
  const handleEditUser = async (userId: string, updatedUser: IUser) => {
    try {
      await updateUser(userId, updatedUser);
      //paupdatina turimą data šitam puslapy, kad iškart parodytų pasikeitimus
      const updatedData = await fetchUserData();
      setData(updatedData);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  //deletina userį irgi su delete requestu iš API, kaip ir PUT 67 eilutėj
  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      //po to kai deletina, vel paupdatina
      const updatedData = await fetchUserData();
      setData(updatedData);
      //sitas true aditaro modalą su žinute, kad ištrinta sėkmingai
      setDeletedUser(true);
      //vėl per naują nustato, kiek userių yra paginationui
      setTotalItems(updatedData.length);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  //uždaro trynimo modalą. reikėjo padaryt atskirą funkciją,
  //nes buttono propsas onClick ima voidinę funckiją kaip type (IButton interface Button componente),
  //tai tiesiog useState typescriptui nepatiko
  const closeDeletedUserModal = () => {
    setDeletedUser(false);
  };

  return (
    <>
      {/* headeris handlina showform, ar rodys add user formą paspaudus ant mygtuko */}
      <Header
        setShowForm={handleShowForm}
        searchUsers={handleUserSearch}
        value={searchValue}
      />
      <StyledPage>
        {/* Jeigu show form yra true, tai rodo modalą su forma */}
        {showForm && (
          <Modal>
            <div ref={formContainerRef}>
              <FormContainer onCancel={handleCloseForm} />
            </div>
          </Modal>
        )}
        {/* Čia paprasčiau, čia buttonas iškart kreipiasi į funckiją šitam faile ir ten su useState settina į false, kas uždaro modalą */}
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
          {/* čia paginationas slicina data. (currentPage - 1) * itemsPerPage, paima
          visus userius iki esamo puslapio, pvz., jeigu esam 4 puslapy, o vienam
          puslapy rodo 5 userius, tai ( 4 - 1 ) * 5 = 15, tai reiskia, kad
          numeta 15 useriu nuo pradzios ir rodo nuo 15 user'io (skaiciuojant nuo 0) ir tada
          currentPage * itemsPerPage būtų 4 * 5 = 20, tai rodo item'us nuo 15
          iki 19
          */}
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
