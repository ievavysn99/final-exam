import { StyledInput } from './style';

interface IInputProps {
  type: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = ({ type, value, onChange }: IInputProps) => {
  return (
    <StyledInput type={type} value={value} onChange={onChange}></StyledInput>
  );
};

export default Input;
