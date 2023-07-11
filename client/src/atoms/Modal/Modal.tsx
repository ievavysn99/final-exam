import { ReactNode } from 'react';
import { ModalWrapper, ModalContainer } from './style';

interface IModalProps {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

const Modal = ({ children, onClick }: IModalProps) => {
  return (
    <ModalWrapper onClick={onClick}>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
