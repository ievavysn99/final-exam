import axios from 'axios';
import { IUser } from '../../../server/src/models/user.model';

export const fetchUserData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const updateUser = async (userId: string, updatedUser: IUser) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/${userId}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
