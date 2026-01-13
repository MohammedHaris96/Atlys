import { useState } from "react";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListIcon,
  OrderedListIcon,
  QuoteIcon,
  CodeIcon,
  TrashIcon,
  PlusIcon,
  MicIcon,
  ImageIcon,
  SendIcon,
  EmojiIcon,
  ChevronDownIcon,
} from "./Icons";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostsContext";

interface PostEditorProps {
  onRequireAuth: () => void;
}

const EMOJIS = ["😊", "👋", "🎉", "❤️", "🔥", "👍", "😂", "🤔"];

export function PostEditor({ onRequireAuth }: PostEditorProps) {
  const [content, setContent] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("😊");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { isAuthenticated, user } = useAuth();
  const { addPost } = usePosts();

  const handleToolbarAction = () => {
    if (!isAuthenticated) {
      onRequireAuth();
      return;
    }
    alert("Function not implemented");
  };

  const handlePublish = () => {
    if (!isAuthenticated) {
      onRequireAuth();
      return;
    }

    if (!content.trim()) {
      alert("Please enter some content");
      return;
    }

    if (user) {
      addPost(content.trim(), selectedEmoji, user);
      setContent("");
      setSelectedEmoji("😊");
    }
  };

  const handleInputFocus = () => {
    if (!isAuthenticated) {
      onRequireAuth();
    }
  };

  const toolbarButtons = [
    { icon: BoldIcon, label: "Bold" },
    { icon: ItalicIcon, label: "Italic" },
    { icon: UnderlineIcon, label: "Underline" },
  ];

  const listButtons = [
    { icon: ListIcon, label: "Bullet List" },
    { icon: OrderedListIcon, label: "Numbered List" },
  ];

  const formatButtons = [
    { icon: QuoteIcon, label: "Quote" },
    { icon: CodeIcon, label: "Code" },
  ];

  const attachmentButtons = [
    { icon: PlusIcon, label: "Add attachment" },
    { icon: MicIcon, label: "Voice" },
    { icon: ImageIcon, label: "Image" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-center gap-1 border-b border-gray-100 p-3">
        <div className="flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1">
          <button
            onClick={handleToolbarAction}
            className="flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-sm text-gray-600 transition-colors"
          >
            Paragraph
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-gray-200" />

          {toolbarButtons.map(({ icon: Icon, label }, index) => (
            <button
              key={label}
              onClick={handleToolbarAction}
              aria-label={label}
              className={`rounded-lg p-2 transition-colors ${
                index === 0
                  ? "border border-gray-200 bg-white text-gray-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              } `}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}

          <div className="mx-1 h-6 w-px bg-gray-200" />

          {listButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={handleToolbarAction}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}

          <div className="mx-1 h-6 w-px bg-gray-200" />

          {formatButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={handleToolbarAction}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <button
          onClick={handleToolbarAction}
          className="rounded-lg bg-red-50 p-2 text-red-400 transition-colors hover:bg-red-200 hover:text-red-600"
          aria-label="Delete"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-2">
          <div className="relative">
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  onRequireAuth();
                  return;
                }
                setShowEmojiPicker(!showEmojiPicker);
              }}
              className="rounded p-1 transition-colors hover:bg-gray-100"
            >
              <EmojiIcon className="h-5 w-5 text-gray-400" />
            </button>

            {showEmojiPicker && (
              <div className="absolute left-0 top-full z-10 mt-1 flex animate-scale-in gap-1 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                {EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setSelectedEmoji(emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="rounded p-1 text-xl transition-colors hover:bg-gray-100"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="How are you feeling today?"
            className="min-h-[60px] flex-1 resize-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            rows={2}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 p-3">
        <div className="flex items-center gap-1">
          {attachmentButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={handleToolbarAction}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        <button
          onClick={handlePublish}
          className="rounded-lg p-2.5 text-white"
          aria-label="Publish"
        >
          <SendIcon className="h-5 w-5 bg-white" />
        </button>
      </div>
    </div>
  );
}
