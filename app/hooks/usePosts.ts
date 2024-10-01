import useSWR from 'swr';
import axios from '@/lib/axios';
import { Post } from '@/app/types/post';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const usePosts = () => {
  const { data: posts, error, mutate } = useSWR<Post[]>('/api/feed/get-feed', fetcher);

  const handleDeletePost = async (postId: number) => {
    try {
      await axios.delete(`/api/feed/delete-feed`, { data: { postId } });
      mutate(); 
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  return { posts, error, mutate, handleDeletePost };
};

export default usePosts;