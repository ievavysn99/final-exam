import User, { IUser } from '../models/user.model';
import { Request, Response } from 'express';

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    // res.json(users);
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
    //res.send(JSON.stringify());
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addSingleUser = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const user = new User(data);
    const userSaved = await user.save();

    if (userSaved) {
      res.status(201).json({ message: 'User has been saved', userSaved });
    } else {
      res.status(404).json({ message: 'User is not saved' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  console.log(id);
  try {
    const userToBeUpdated = await User.findById(id);

    if (!userToBeUpdated) {
      res.status(404).json({ message: 'User with given id not found' });
    } else {
      const updatedCar = await User.findByIdAndUpdate(id, data);

      if (updatedCar) {
        res.status(201).json({ message: 'User updated' });
      } else {
        res.status(404).json({ message: 'User not updated' });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not deleted. Invalid user id' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
