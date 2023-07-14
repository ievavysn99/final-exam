import axios from 'axios';
import { IUser } from '../../../server/src/models/user.model';

export const fetchUserData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');
    return response.data;
  } catch (error) {}
};

interface IFormData {
  name: string;
  surname: string;
  email: string;
  age: number;
}

export const addUser = async (formData: IFormData) => {
  try {
    await axios.post('http://localhost:5000/api/users', formData);
  } catch (error) {}
};

export const updateUser = async (userId: string, updatedUser: IUser) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/${userId}`,
      updatedUser
    );
    return response.data;
  } catch (error) {}
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/users/${userId}`
    );
    return response.data;
  } catch (error) {}
};
