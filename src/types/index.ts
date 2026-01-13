export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  emoji: string;
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}
