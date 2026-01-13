import { createContext, useContext, useState } from "react";
import type { AuthContextType, User } from "../types";

const TEST_ACCOUNTS = [
  { email: "demo@example.com", password: "password123", name: "Demo User" },
  { email: "test@user.com", password: "testpass", name: "Haris" },
];

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("Atlys-user");
    return saved ? JSON.parse(saved) : null;
  });

  async function signIn(email: string, password: string): Promise<boolean> {
    const account = TEST_ACCOUNTS.find(
      (acc) => acc.email === email && acc.password === password,
    );

    if (!account) return false;

    const newUser: User = {
      id: crypto.randomUUID(),
      email: account.email,
      name: account.name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${account.email}`,
    };

    setUser(newUser);
    localStorage.setItem("Atlys-user", JSON.stringify(newUser));
    return true;
  }

  async function signUp(email: string, password: string): Promise<boolean> {
    if (password.length < 6) return false;

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name: email.split("@")[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };

    setUser(newUser);
    localStorage.setItem("Atlys-user", JSON.stringify(newUser));
    return true;
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("Atlys-user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
