import useSWR from 'swr';
import { getAllComments } from '../../api/comment';

export function useCommentList() {
  return (
    useSWR(
      'comments',
      async () => getAllComments(),
      { refreshInterval: 5000 }
    )
  ) 
}
