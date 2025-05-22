import axios from 'axios';
import { IComment } from '../entities/Comment';

export async function getAllComments(){
  try {
    const response = await axios.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');

    return response.data;
  } catch (error) {
    throw new Error('Ошибка');
  }
}
