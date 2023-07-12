import { StyledButton } from './style';

interface IButtonProps {
  type?: string;
  content: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ type, content, onClick, className }: IButtonProps) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

export default Button;
