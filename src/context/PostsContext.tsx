import { createContext, useContext, useState, useCallback } from "react";
import type { Post, User } from "../types";

interface PostsContextType {
  posts: Post[];
  addPost: (content: string, emoji: string, author: User) => void;
}

const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    author: {
      id: "a1",
      email: "theresa@example.com",
      name: "Theresa Webb",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=theresa",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "😊",
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
  },
  {
    id: "2",
    author: {
      id: "a2",
      email: "john@example.com",
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "👋",
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
  },
  {
    id: "3",
    author: {
      id: "a3",
      email: "jane@example.com",
      name: "Jane Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "👋",
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
  },
];

const PostsContext = createContext<PostsContextType | null>(null);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);

  const addPost = useCallback(
    (content: string, emoji: string, author: User) => {
      const newPost: Post = {
        id: crypto.randomUUID(),
        author,
        content,
        emoji,
        createdAt: new Date(),
      };
      setPosts((prev) => [newPost, ...prev]);
    },
    []
  );

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts(): PostsContextType {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
}
