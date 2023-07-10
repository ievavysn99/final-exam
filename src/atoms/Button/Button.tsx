import { StyledButton } from './style';

interface IButtonProps {
  mode: string;
  content: string;
}

const Button = ({ mode, content }: IButtonProps) => {
  return <StyledButton mode={mode}>{content}</StyledButton>;
};

export default Button;
