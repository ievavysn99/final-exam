import { ReactNode } from 'react';
import { ModalWrapper, ModalContainer } from './style';

interface IModalProps {
  children: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return (
    <ModalWrapper>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
