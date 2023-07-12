import { useEffect, useState } from 'react';
import { IUser } from '../../../../server/src/models/user.model';
import Button from '../Button';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledDeleteButtonContainer,
  StyledEditable,
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
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(
    null
  );

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

  const handleDeleteClick = (userId: string) => {
    setDeleteConfirmation(userId);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation) {
      onDeleteUser(deleteConfirmation);
      setDeleteConfirmation(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  return (
    <StyledContainer>
      {userData.map((user) => (
        <StyledRowContainer key={user._id}>
          <StyledRowInfoContainer>
            {user.isEditing ? (
              <>
                <StyledEditable
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e: { target: { innerText: string } }) =>
                    handleContentChange(user._id, 'name', e.target.innerText)
                  }
                >
                  {user.name}
                </StyledEditable>
                <StyledEditable
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e: { target: { innerText: string } }) =>
                    handleContentChange(user._id, 'surname', e.target.innerText)
                  }
                >
                  {user.surname}
                </StyledEditable>
                <StyledEditable
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e: { target: { innerText: string } }) =>
                    handleContentChange(user._id, 'email', e.target.innerText)
                  }
                >
                  {user.email}
                </StyledEditable>
                <StyledEditable
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e: { target: { innerText: string } }) =>
                    handleContentChange(user._id, 'age', e.target.innerText)
                  }
                >
                  {user.age}
                </StyledEditable>
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
          <StyledButtonContainer className='delete-or-cancel'>
            {deleteConfirmation === user._id ? (
              <StyledDeleteButtonContainer>
                <div>Ar tikrai norite ištrinti?</div>
                <div className='buttons'>
                  <Button
                    content='Taip'
                    className='danger'
                    onClick={handleConfirmDelete}
                  />
                  <Button
                    content='Atšaukti'
                    className='cancel'
                    onClick={handleCancelDelete}
                  />
                </div>
              </StyledDeleteButtonContainer>
            ) : (
              <>
                {user.isEditing ? (
                  <>
                    <Button
                      content='Išsaugoti'
                      className='success'
                      onClick={() => handleSaveClick(user._id, user)}
                    />
                    <Button
                      content='Atšaukti'
                      className='cancel'
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
                      className='danger'
                      onClick={() => handleDeleteClick(user._id)}
                    />
                  </>
                )}
              </>
            )}
          </StyledButtonContainer>
        </StyledRowContainer>
      ))}
    </StyledContainer>
  );
};

export default TableRow;
