import axios from 'axios';
import { IUser } from '../entities/User';

export async function getAllUsers(){
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

    return response.data;
  } catch (error) {
    throw new Error('Ошибка');
  }
}
