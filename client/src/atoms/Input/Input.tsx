import { StyledInput } from './style';

interface IInputProps {
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
}

const Input = ({ type, value, placeholder, onChange }: IInputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledInput>
  );
};

export default Input;
