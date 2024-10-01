
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import { useUser } from '@clerk/nextjs';

const useCurrentUserId = () => {
  const { user } = useUser();
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCurrentUserId = async () => {
      try {
        const response = await axios.get('/api/users/get-current-user-id');
        setCurrentUserId(response.data.user_id);
      } catch (error) {
        console.error('Error fetching current user id', error);
      }
    };

    if (user) {
      fetchCurrentUserId();
    }
  }, [user]);

  return currentUserId;
};

export default useCurrentUserId;
