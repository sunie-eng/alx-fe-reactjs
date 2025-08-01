import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set) => ({
  user: null,
  error: null,
  loading: false,

  fetchUser: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      set({ user: response.data, loading: false });
    } catch (err) {
      set({ error: 'User not found', user: null, loading: false });
    }
  },
}));

export default useUserStore;
