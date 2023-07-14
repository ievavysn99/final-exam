import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {
  getAllUsers,
  addSingleUser,
  updateSingleUser,
  deleteSingleUser,
} from './controllers/user.controllers';

require('./config/db');

const app: Express = express();
dotenv.config();

export const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/users', getAllUsers);
app.post('/api/users', addSingleUser);
app.put('/api/users/:id', updateSingleUser);
app.delete('/api/users/:id', deleteSingleUser);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
