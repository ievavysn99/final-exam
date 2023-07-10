import { StyledButton } from './style';

interface IButtonProps {
  type?: string;
  mode: string;
  content: string;
  onClick?: () => void;
}

const Button = ({ type, mode, content, onClick }: IButtonProps) => {
  return (
    <StyledButton type={type} mode={mode} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

export default Button;
