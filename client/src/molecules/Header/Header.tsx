import { useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { StyledHeader } from './style';

interface IHeaderProps {
  setShowForm: (value: boolean) => void;
  searchUsers: (value: string) => void;
  value: string;
}

const Header = ({ setShowForm, searchUsers, value }: IHeaderProps) => {
  const [searchValue, setSearchValue] = useState(value);

  const addUser = () => {
    setShowForm(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    searchUsers(value);
  };

  return (
    <StyledHeader>
      <div>
        <Input
          type='text'
          value={searchValue}
          placeholder='Search'
          onChange={handleSearch}
        ></Input>
        <Button
          content='Pridėti naują'
          onClick={addUser}
          className='add-user-button'
        ></Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
