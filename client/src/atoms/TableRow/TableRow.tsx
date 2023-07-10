import { useState, useEffect } from 'react';
import { IUser } from '../../../../server/src/models/user.model';
import Button from '../Button';

const TableRow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Make a GET request to the server endpoint
        const responseData = await response.json(); // Extract the JSON data from the response
        setData(responseData); // Set the retrieved data in the component state
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((user: IUser) => (
        <>
          <div key={user.id}>
            <div>{user.name}</div>
            <div>{user.surname}</div>
            <div>{user.email}</div>
            <div>{user.age}</div>
          </div>
          <Button mode='dark' content='Redaguoti'></Button>
          <Button mode='dark' content='Ištrinti'></Button>
        </>
      ))}
    </div>
  );
};

export default TableRow;
