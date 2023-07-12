// import { useEffect } from 'react';
// import { IUser } from '../../../../server/src/models/user.model';
// import Button from '../Button';
// import {
//   StyledButtonContainer,
//   StyledContainer,
//   StyledRowContainer,
//   StyledRowInfoContainer,
// } from './style';

// interface ITableRowProps {
//   data: IUser[];
// }

// const TableRow = ({ data }: ITableRowProps) => {
//   const deleteUser = (id: string) => {
//     console.log(id);
//   };

//   return (
//     <StyledContainer>
//       {data.map((user) => (
//         <StyledRowContainer key={user.id}>
//           <StyledRowInfoContainer>
//             <div>{user.name}</div>
//             <div>{user.surname}</div>
//             <div>{user.email}</div>
//             <div>{user.age}</div>
//           </StyledRowInfoContainer>
//           <StyledButtonContainer>
//             <Button mode='dark' content='Redaguoti' />
//             <Button
//               mode='dark'
//               content='Ištrinti'
//               onClick={deleteUser(user.id)}
//             />
//           </StyledButtonContainer>
//         </StyledRowContainer>
//       ))}
//     </StyledContainer>
//   );
// };

// export default TableRow;
import { useEffect, useState } from 'react';
import { IUser } from '../../../../server/src/models/user.model';
import fetchUserData from '../../API/api';
import Button from '../Button';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledRowContainer,
  StyledRowInfoContainer,
} from './style';

interface ITableRowProps {
  data: IUser[];
  onEditUser: (userId: string) => void;
  onDeleteUser: (userId: string) => void;
}

const TableRow = ({ data, onEditUser, onDeleteUser }: ITableRowProps) => {
  const [userData, setUserData] = useState<IUser[]>([]);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  return (
    <StyledContainer>
      {userData.map((user) => (
        <StyledRowContainer key={user._id}>
          <StyledRowInfoContainer>
            <div>{user.name}</div>
            <div>{user.surname}</div>
            <div>{user.email}</div>
            <div>{user.age}</div>
          </StyledRowInfoContainer>
          <StyledButtonContainer>
            <Button content='Redaguoti' onClick={() => onEditUser(user._id)} />
            <Button content='Ištrinti' onClick={() => onDeleteUser(user._id)} />
          </StyledButtonContainer>
        </StyledRowContainer>
      ))}
    </StyledContainer>
  );
};

export default TableRow;
