import { useState } from 'react';

export default function FetchUsersButton() {
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/users');
      const { users } = await response.json();
      console.log(users);  // Log the users to the console
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
    </div>
  );
}
