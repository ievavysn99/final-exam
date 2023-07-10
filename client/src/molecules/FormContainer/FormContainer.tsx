import { useState } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button';

const FormContainer = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

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
        // User was successfully saved
        console.log('User has been saved:', response.data.userSaved);
      } else {
        // User was not saved
        console.log('User is not saved');
      }
    } catch (error) {
      // Error occurred
      console.error('Error:', error);
    }

    setName(name);
    setSurname(surname);
    setEmail(email);
    setAge(age);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>
          Vardas:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Pavardė:
          <input
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          El. paštas:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Amžius:
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <Button type='submit' mode='light' content='Pridėti naują' />
      </form>
    </div>
  );
};

export default FormContainer;
