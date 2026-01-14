import { Link } from "react-router-dom";
import { LogoIcon, AuthIcon } from "./Icons";
import { useAuth } from "../context/AuthContext";

interface HeaderProps {
  showBackToHome?: boolean;
}

export function Header({ showBackToHome = false }: HeaderProps) {
  const { isAuthenticated, user, signOut } = useAuth();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-900 transition-opacity hover:opacity-80"
        >
          <LogoIcon className="h-8 w-8" />
          <span className="text-lg font-semibold">Atlys</span>
        </Link>

        {showBackToHome ? (
          <Link
            to="/"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Back to home
          </Link>
        ) : isAuthenticated ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                {user?.name}
              </span>
            </div>
            <button onClick={signOut} className="group">
              <AuthIcon className="h-4 w-4 text-gray-500 transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Login <AuthIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
    </header>
  );
}
