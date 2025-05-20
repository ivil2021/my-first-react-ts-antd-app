import axios from 'axios';
import { IPost } from '../entities/Post';

export async function getAllPosts(){
  try {
    const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');

    return response.data;
  } catch (error) {
    throw new Error('Ошибка');
  }
}