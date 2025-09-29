import { create } from 'zustand';
import { getPosts, getPostsBySearch } from '@/app/services/getPosts';

type UsePosts = {
  posts: any[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (search: string) => Promise<void>;
};

export const usePosts = create<UsePosts>((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await getPosts();
    set({ posts, loading: false });
  },
  getPostsBySearch: async (searchValue) => {
    set({ loading: true });
    const posts = await getPostsBySearch(searchValue);
    set({ posts, loading: false });
  },
}));
