import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthIcon } from "./Icons";
import { useAuth } from "../context/AuthContext";
import { Input } from "./Input";
import { Button } from "./Button";
import { AuthIcon } from "./Icons";

interface AuthFormProps {
  mode: "signin" | "signup";
  onSuccess?: () => void;
  isModal?: boolean;
}

export function AuthForm({ mode, onSuccess, isModal = false }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const isSignIn = mode === "signin";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!isSignIn && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!isSignIn && password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const success = isSignIn
        ? await signIn(email, password)
        : await signUp(email, password);

      if (success) {
        if (onSuccess) {
          onSuccess();
        } else {
          navigate("/");
        }
      } else {
        setError(isSignIn ? "Invalid credentials" : "Failed to create account");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8">
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <AuthIcon className="h-6 w-6 text-gray-700" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">
          {isSignIn ? "Sign in to continue" : "Create an account to continue"}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {isSignIn
            ? "Sign in to access all the features on this app"
            : "Create an account to access all the features on this app"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email or username"
          type="email"
          placeholder="Enter your email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isSignIn && (
          <Input
            label="Repeat password"
            type="password"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {error && (
          <p className="animate-fade-in text-sm text-red-500">{error}</p>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Please wait..." : isSignIn ? "Sign In" : "Sign Up"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        {isSignIn ? "Do not have an account? " : "Already have an account? "}
        {isModal ? (
          <button
            type="button"
            onClick={() => {
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              setError("");
            }}
            className="font-medium text-primary hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        ) : (
          <Link
            to={isSignIn ? "/signup" : "/signin"}
            className="font-medium text-primary hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        )}
      </p>
    </div>
  );
}
