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
}

const TableRow = ({ data }: ITableRowProps) => {
  return (
    <StyledContainer>
      {data.map((user) => (
        <StyledRowContainer key={user.id}>
          <StyledRowInfoContainer>
            <div>{user.name}</div>
            <div>{user.surname}</div>
            <div>{user.email}</div>
            <div>{user.age}</div>
          </StyledRowInfoContainer>
          <StyledButtonContainer>
            <Button mode='dark' content='Redaguoti' />
            <Button mode='dark' content='Ištrinti' />
          </StyledButtonContainer>
        </StyledRowContainer>
      ))}
    </StyledContainer>
  );
};

export default TableRow;
