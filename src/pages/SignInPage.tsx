import { Header } from "../components/Header";
import { AuthForm } from "../components/AuthForm";

export function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackToHome />

      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="relative w-full max-w-lg animate-scale-in rounded-3xl bg-gray-200 p-5 shadow-xl">
          <AuthForm mode="signin" />
        </div>
      </main>
    </div>
  );
}
