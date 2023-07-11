import { StyledButton } from './style';

interface IButtonProps {
  type?: string;
  mode: string;
  content: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ type, mode, content, onClick, className }: IButtonProps) => {
  return (
    <StyledButton class={className} type={type} mode={mode} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

export default Button;
