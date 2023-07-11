import { IUser } from '../../../../server/src/models/user.model';
import Button from '../Button';
import { StyledRowContainer } from './style';

interface ITableRowProps {
  data: IUser[];
}

const TableRow = ({ data }: ITableRowProps) => {
  return (
    <div>
      {data.map((user) => (
        <StyledRowContainer key={user.id}>
          <div>{user.name}</div>
          <div>{user.surname}</div>
          <div>{user.email}</div>
          <div>{user.age}</div>
          <Button mode='dark' content='Redaguoti' />
          <Button mode='dark' content='Ištrinti' />
        </StyledRowContainer>
      ))}
    </div>
  );
};

export default TableRow;
