import { useEffect, useState } from 'react';
import { IUser } from '../../../../server/src/models/user.model';
import Button from '../Button';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledRowContainer,
  StyledRowInfoContainer,
} from './style';

interface ITableRowProps {
  data: IUser[];
  onEditUser: (userId: string, updatedUser: IUser) => void;
  onDeleteUser: (userId: string) => void;
}

const TableRow = ({ data, onEditUser, onDeleteUser }: ITableRowProps) => {
  const [userData, setUserData] = useState<IUser[]>([]);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleEditClick = (userId: string) => {
    setUserData(
      (prevUserData) =>
        prevUserData.map((user) =>
          user._id === userId ? { ...user, isEditing: true } : user
        ) as IUser[]
    );
  };

  const handleSaveClick = (userId: string, updatedUser: IUser) => {
    setUserData(
      (prevUserData) =>
        prevUserData.map((user) =>
          user._id === userId ? { ...updatedUser, isEditing: false } : user
        ) as IUser[]
    );
    onEditUser(userId, updatedUser);
  };

  const handleCancelClick = (userId: string) => {
    setUserData(
      (prevUserData) =>
        prevUserData.map((user) =>
          user._id === userId ? { ...user, isEditing: false } : user
        ) as IUser[]
    );
  };

  const handleContentChange = (
    userId: string,
    field: keyof IUser,
    value: string
  ) => {
    setUserData(
      (prevUserData) =>
        prevUserData.map((user) =>
          user._id === userId ? { ...user, [field]: value } : user
        ) as IUser[]
    );
  };

  return (
    <StyledContainer>
      {userData.map((user) => (
        <StyledRowContainer key={user._id}>
          <StyledRowInfoContainer>
            {user.isEditing ? (
              <>
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange(user._id, 'name', e.target.innerText)
                  }
                >
                  {user.name}
                </div>
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange(user._id, 'surname', e.target.innerText)
                  }
                >
                  {user.surname}
                </div>
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange(user._id, 'email', e.target.innerText)
                  }
                >
                  {user.email}
                </div>
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange(user._id, 'age', e.target.innerText)
                  }
                >
                  {user.age}
                </div>
              </>
            ) : (
              <>
                <div>{user.name}</div>
                <div>{user.surname}</div>
                <div>{user.email}</div>
                <div>{user.age}</div>
              </>
            )}
          </StyledRowInfoContainer>
          <StyledButtonContainer>
            {user.isEditing ? (
              <>
                <Button
                  content='Išsaugoti'
                  onClick={() => handleSaveClick(user._id, user)}
                />
                <Button
                  content='Atšaukti'
                  onClick={() => handleCancelClick(user._id)}
                />
              </>
            ) : (
              <>
                <Button
                  content='Redaguoti'
                  onClick={() => handleEditClick(user._id)}
                />
                <Button
                  content='Ištrinti'
                  onClick={() => onDeleteUser(user._id)}
                />
              </>
            )}
          </StyledButtonContainer>
        </StyledRowContainer>
      ))}
    </StyledContainer>
  );
};

export default TableRow;
