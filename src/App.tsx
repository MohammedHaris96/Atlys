import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostsProvider } from "./context/PostsContext";
import { FeedPage } from "./pages/FeedPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
