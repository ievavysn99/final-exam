import Button from '../../atoms/Button';
import { StyledHeader } from './style';

interface IHeaderProps {
  setShowForm: (value: boolean) => void;
}

const Header = ({ setShowForm }: IHeaderProps) => {
  const addUser = () => {
    setShowForm(true);
  };

  return (
    <StyledHeader>
      <div>
        <h1>Dalyvių sistema</h1>
        <Button
          mode='dark'
          content='Pridėti naują'
          onClick={addUser}
          className='add-user-button'
        ></Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
