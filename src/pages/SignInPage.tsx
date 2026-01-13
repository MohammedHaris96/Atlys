import { Header } from "../components/Header";
import { AuthForm } from "../components/AuthForm";

export function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackToHome />

      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 animate-scale-in">
          <AuthForm mode="signin" />
        </div>
      </main>
    </div>
  );
}
