import { useState } from 'react';
import useUserStore from './store/userStore';
import UserCard from './components/UserCard';

function App() {
  const [username, setUsername] = useState('');
  const fetchUser = useUserStore((state) => state.fetchUser);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUser(username.trim());
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '0.5rem', width: '250px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <UserCard />
    </div>
  );
}

export default App;
