import { Header } from "../components/Header";
import { AuthForm } from "../components/AuthForm";

export function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackToHome />

      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md animate-scale-in rounded-2xl border border-gray-100 bg-white shadow-sm">
          <AuthForm mode="signup" />
          <div className="a b c" />
        </div>
      </main>
    </div>
  );
}
