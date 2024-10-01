
import { useState } from 'react';
import axios from '@/lib/axios';

const useSubmitFeed = (onPostCreated: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (content: string) => {
    setIsSubmitting(true);
    setError(null);

    try {
      console.log(content);
      await axios.post('/api/feed/create-feed', { content });
      onPostCreated(); 
    } catch (err) {
      console.error('Error creating post', err);
      setError('Error creating post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, handleSubmit };
};

export default useSubmitFeed;
