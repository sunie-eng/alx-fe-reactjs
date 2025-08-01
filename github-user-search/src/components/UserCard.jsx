import useUserStore from '../store/userStore';

const UserCard = () => {
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', maxWidth: '400px' }}>
      <img src={user.avatar_url} alt="Avatar" width="100" style={{ borderRadius: '50%' }} />
      <h2>{user.name || 'No name available'}</h2>
      <p>{user.bio || 'No bio provided.'}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
