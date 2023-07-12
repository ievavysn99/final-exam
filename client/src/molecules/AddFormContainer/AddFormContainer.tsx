import { useState } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal/Modal';
import {
  StyledFormContainer,
  StyledFormItem,
  StyledUserSavedContainer,
  StyledWrapper,
} from './style';
import Input from '../../atoms/Input';

interface IAddFormContainerProps {
  onCancel: () => void;
}

const AddFormContainer = ({ onCancel }: IAddFormContainerProps) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      surname,
      email,
      age: parseInt(age),
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users',
        formData
      );
      if (response.status === 201) {
        setSubmitted(true);
      } else {
        // User was not saved
        console.log('User is not saved');
      }
    } catch (error) {
      // Error occurred
      console.error('Error:', error);
    }

    setName('');
    setSurname('');
    setEmail('');
    setAge('');
  };

  const handleCancel = () => {
    onCancel();
  };

  if (submitted) {
    return (
      <Modal>
        <StyledUserSavedContainer>
          Vartotojas pridėtas sėkmingai
          <Button
            content='Uždaryti'
            className='cancel'
            onClick={handleCancel}
          />
        </StyledUserSavedContainer>
      </Modal>
    );
  }

  return (
    <Modal>
      <StyledWrapper>
        <form onSubmit={handleSubmit}>
          <StyledFormContainer>
            <StyledFormItem>
              <label>Vardas:</label>
              <Input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label>Pavardė:</label>
              <Input
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label>El. paštas:</label>
              <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label>Amžius:</label>
              <Input
                type='number'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </StyledFormItem>
            <Button
              content='Atšaukti'
              className='cancel'
              onClick={handleCancel}
            />
            <Button
              type='submit'
              content='Pridėti naują'
              className='form-button'
            />
          </StyledFormContainer>
        </form>
      </StyledWrapper>
    </Modal>
  );
};

export default AddFormContainer;
