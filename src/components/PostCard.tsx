import type { Post } from "../types";
import { CommentIcon, HeartIcon, ShareIcon } from "./Icons";

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
    <div className="animate-slide-up rounded-3xl bg-gray-200 p-2 shadow-sm">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-start gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full bg-gray-300 object-cover transition-transform duration-300 ease-out hover:scale-110"
          />

          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {post.author.name}
            </h3>
            <p className="text-xs text-gray-400">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 p-4">
            {post.emoji}
          </div>

          <p className="text-sm leading-relaxed text-gray-700">
            {post.content}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 px-2">
        <button
          onClick={handleAction}
          className="animate-pulse rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-300"
          aria-label="Like"
        >
          <HeartIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handleAction}
          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-300"
          aria-label="Comment"
        >
          <CommentIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handleAction}
          aria-label="Share"
          className="rounded-lg p-2 text-gray-500 transition-transform duration-500 ease-in-out hover:rotate-45"
        >
          <ShareIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
