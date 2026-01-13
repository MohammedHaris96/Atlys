import { Link } from "react-router-dom";
import { LogoIcon, LoginIcon } from "./Icons";
import { useAuth } from "../context/AuthContext";

interface HeaderProps {
  showBackToHome?: boolean;
}

export function Header({ showBackToHome = false }: HeaderProps) {
  const { isAuthenticated, user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-40">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity"
        >
          <LogoIcon className="w-8 h-8" />
          <span className="font-semibold text-lg">Atlys</span>
        </Link>

        {showBackToHome ? (
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Back to home
          </Link>
        ) : isAuthenticated ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                {user?.name}
              </span>
            </div>
            <button
              onClick={signOut}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login <LoginIcon className="w-4 h-4" />
          </Link>
        )}
      </div>
    </header>
  );
}
