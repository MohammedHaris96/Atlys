import type { Post } from "../types";
import { HeartIcon, CommentIcon, ShareIcon } from "./Icons";

interface PostCardProps {
  post: Post;
  onInteraction: () => void;
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins} mins ago`;

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hours ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} days ago`;
}

export function PostCard({ post, onInteraction }: PostCardProps) {
  const handleAction = () => {
    onInteraction();
  };

  return (
    <article className="bg-white rounded-2xl border border-gray-200 p-5 animate-slide-up">
      <div className="flex items-start gap-3 mb-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">
            {post.author.name}
          </h3>
          <p className="text-xs text-gray-400">
            {formatTimeAgo(post.createdAt)}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-3">
        <span className="text-xl">{post.emoji}</span>
        <p className="text-sm text-gray-700 leading-relaxed">{post.content}</p>
      </div>

      <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
        <button
          onClick={handleAction}
          className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
          aria-label="Like"
        >
          <HeartIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleAction}
          className="p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
          aria-label="Comment"
        >
          <CommentIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleAction}
          className="p-2 rounded-lg text-gray-400 hover:text-green-500 hover:bg-green-50 transition-all duration-200"
          aria-label="Share"
        >
          <ShareIcon className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
