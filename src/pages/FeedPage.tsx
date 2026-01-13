import { useState } from "react";
import { Header } from "../components/Header";
import { PostEditor } from "../components/PostEditor";
import { PostCard } from "../components/PostCard";
import { AuthForm } from "../components/AuthForm";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";
import { CustomModal } from "../components/CustomModal";

export function FeedPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const { posts } = usePosts();
  const { isAuthenticated } = useAuth();

  const handleRequireAuth = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  };

  const handlePostInteraction = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      alert("Function not implemented");
    }
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-2xl px-4 pb-12 pt-24">
        <div className="space-y-6">
          <PostEditor onRequireAuth={handleRequireAuth} />

          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onInteraction={handlePostInteraction}
              />
            ))}
          </div>
        </div>
      </main>

      <CustomModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      >
        <AuthForm mode={authMode} onSuccess={handleAuthSuccess} isModal />
        <div className="px-8 pb-6 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-sm font-medium text-primary hover:underline"
          >
            {authMode === "signin"
              ? "Need an account? Sign Up"
              : "Have an account? Sign In"}
          </button>
        </div>
      </CustomModal>
    </div>
  );
}
