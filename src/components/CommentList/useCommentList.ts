import useSWR from 'swr';
import { getAllComments } from '../../api/comment';

export function useCommentList () {
  const { data: comments, isValidating: isLoading } = useSWR (
    'comments',
    async () => getAllComments (),
    { refreshInterval: 5000 }
  )

  return ({
    comments,
    isLoading
  })
}
