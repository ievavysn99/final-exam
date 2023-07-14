import { StyledInput } from './style';

interface IInputProps {
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (e: any) => void;
}

const Input = ({
  type,
  value,
  placeholder,
  className,
  onChange,
}: IInputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    ></StyledInput>
  );
};

export default Input;
