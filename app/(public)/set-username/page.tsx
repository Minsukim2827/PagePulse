import { useState } from 'react';
import { useRouter } from 'next/router';
import { withAuth } from '@clerk/nextjs/api';
import axiosInstance from '@/lib/axios';

const Page = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
        const response = await axiosInstance.post('/api/update-username', { username });
        if (response.status === 200) {
          router.push('/success');
        } else {
          throw new Error('Failed to update username');
        }
      } catch (error: any) {
        setError(error.message || 'Unexpected error occurred');
      }
    };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto' }} className="flex justify-center items-center m-auto">
      <h1>Set Your Username</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default withAuth(Page);
