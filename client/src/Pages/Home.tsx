// import { useEffect, useState } from 'react';
// import Modal from '../atoms/Modal/Modal';
// import Pagination from '../atoms/Pagination/Pagination';
// import TableHeading from '../atoms/TableHeading';
// import TableRow from '../atoms/TableRow';
// import Footer from '../molecules/Footer/Footer';
// import FormContainer from '../molecules/AddFormContainer';
// import Header from '../molecules/Header';
// import { StyledPage, StyledTableContainer } from './style';

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const [showForm, setShowForm] = useState(false);
//   const itemsPerPage = 5;

//   const handleShowForm = (value: boolean) => {
//     setShowForm(value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const responseData = await response.json();
//         setData(responseData);
//         setTotalItems(responseData.length); // Update this line
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <>
//       <Header setShowForm={handleShowForm} />
//       <StyledPage>
//         {showForm && (
//           <Modal>
//             <FormContainer />
//           </Modal>
//         )}
//         <StyledTableContainer>
//           <TableHeading></TableHeading>
//           <TableRow
//             data={data.slice(
//               (currentPage - 1) * itemsPerPage,
//               currentPage * itemsPerPage
//             )}
//           />
//         </StyledTableContainer>
//         <Pagination
//           totalItems={totalItems}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//         />
//       </StyledPage>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Home;

// // import { useEffect, useState } from 'react';
// // import Modal from '../atoms/Modal/Modal';
// // import Pagination from '../atoms/Pagination/Pagination';
// // import TableHeading from '../atoms/TableHeading';
// // import TableRow from '../atoms/TableRow';
// // import Footer from '../molecules/Footer/Footer';
// // import FormContainer from '../molecules/FormContainer';
// // import Header from '../molecules/Header';
// // import { StyledPage, StyledTableContainer } from './style';

// // const Home = () => {
// //   const [data, setData] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalItems, setTotalItems] = useState(0);
// //   const [showForm, setShowForm] = useState(false);
// //   const itemsPerPage = 5;

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/users');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch data');
// //         }
// //         const responseData = await response.json();
// //         setData(responseData);
// //         setTotalItems(responseData.length);
// //       } catch (error) {
// //         console.error('Error:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleShowForm = () => {
// //     setShowForm(true);
// //   };

// //   const handleCloseForm = () => {
// //     setShowForm(false);
// //   };

// //   const handlePageChange = (page: number) => {
// //     setCurrentPage(page);
// //   };

// //   return (
// //     <>
// //       <Header onAddUser={handleShowForm} />
// //       <StyledPage>
// //         {showForm && (
// //           <Modal onClose={handleCloseForm}>
// //             <FormContainer />
// //           </Modal>
// //         )}
// //         <StyledTableContainer>
// //           <TableHeading></TableHeading>
// //           <TableRow
// //             data={data.slice(
// //               (currentPage - 1) * itemsPerPage,
// //               currentPage * itemsPerPage
// //             )}
// //           />
// //         </StyledTableContainer>
// //         <Pagination
// //           totalItems={totalItems}
// //           itemsPerPage={itemsPerPage}
// //           onPageChange={handlePageChange}
// //         />
// //       </StyledPage>
// //       <Footer></Footer>
// //     </>
// //   );
// // };

// // export default Home;

// import { useEffect, useState, useRef } from 'react';
// import Modal from '../atoms/Modal/Modal';
// import Pagination from '../atoms/Pagination/Pagination';
// import TableHeading from '../atoms/TableHeading';
// import TableRow from '../atoms/TableRow';
// import Footer from '../molecules/Footer/Footer';
// import FormContainer from '../molecules/AddFormContainer';
// import Header from '../molecules/Header';
// import { StyledPage, StyledTableContainer } from './style';

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const [showForm, setShowForm] = useState(false);
//   const itemsPerPage = 5;
//   const formContainerRef = useRef(null);

//   const handleShowForm = (value: boolean) => {
//     setShowForm(value);
//   };

//   const handleOutsideClick = (e: MouseEvent) => {};

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users');
//         if (!response) {
//           throw new Error('Failed to fetch data');
//         }
//         const responseData = await response.json();
//         setData(responseData);
//         setTotalItems(responseData.length);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   // useEffect(() => {
//   //   document.addEventListener('mousedown', handleOutsideClick);

//   //   return () => {
//   //     document.removeEventListener('mousedown', handleOutsideClick);
//   //   };
//   // }, []);

//   return (
//     <>
//       <Header setShowForm={handleShowForm} />
//       <StyledPage>
//         {showForm && (
//           <Modal onClick={handleOutsideClick}>
//             <div ref={formContainerRef}>
//               <FormContainer />
//             </div>
//           </Modal>
//         )}
//         <StyledTableContainer>
//           <TableHeading></TableHeading>
//           <TableRow
//             data={data.slice(
//               (currentPage - 1) * itemsPerPage,
//               currentPage * itemsPerPage
//             )}
//           />
//         </StyledTableContainer>
//         <Pagination
//           totalItems={totalItems}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//         />
//       </StyledPage>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Home;

import { useEffect, useState, useRef } from 'react';
import Modal from '../atoms/Modal/Modal';
import Pagination from '../atoms/Pagination/Pagination';
import TableHeading from '../atoms/TableHeading';
import TableRow from '../atoms/TableRow';
import Footer from '../molecules/Footer/Footer';
import FormContainer from '../molecules/AddFormContainer';
import Header from '../molecules/Header';
import { StyledPage, StyledTableContainer } from './style';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const itemsPerPage = 5;
  const formContainerRef = useRef(null);

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
        setTotalItems(responseData.length);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEditUser = (userId: string) => {
    console.log(userId);
  };

  const handleDeleteUser = (userId: string) => {
    console.log(userId);
  };

  return (
    <>
      <Header setShowForm={handleShowForm} />
      <StyledPage>
        {showForm && (
          <Modal>
            <div ref={formContainerRef}>
              <FormContainer onCancel={() => handleShowForm(false)} />
            </div>
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
