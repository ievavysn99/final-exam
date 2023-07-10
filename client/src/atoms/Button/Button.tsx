import { StyledButton } from './style';

interface IButtonProps {
  mode: string;
  content: string;
  onClick?: () => void;
}

const Button = ({ mode, content, onClick }: IButtonProps) => {
  return (
    <StyledButton mode={mode} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

export default Button;
