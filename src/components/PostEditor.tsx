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
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-1 p-3 border-b border-gray-100">
        <button
          onClick={handleToolbarAction}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Paragraph
          <ChevronDownIcon className="w-4 h-4" />
        </button>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        {toolbarButtons.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={handleToolbarAction}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}

        <div className="w-px h-6 bg-gray-200 mx-1" />

        {listButtons.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={handleToolbarAction}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}

        <div className="w-px h-6 bg-gray-200 mx-1" />

        {formatButtons.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={handleToolbarAction}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}

        <div className="flex-1" />

        <button
          onClick={handleToolbarAction}
          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete"
        >
          <TrashIcon className="w-4 h-4" />
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
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <EmojiIcon className="w-5 h-5 text-gray-400" />
            </button>

            {showEmojiPicker && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex gap-1 z-10 animate-scale-in">
                {EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setSelectedEmoji(emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="p-1 hover:bg-gray-100 rounded text-xl transition-colors"
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
            className="flex-1 resize-none text-sm text-gray-700 placeholder:text-gray-400 min-h-[60px] focus:outline-none"
            rows={2}
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-3 border-t border-gray-100">
        <div className="flex items-center gap-1">
          {attachmentButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={handleToolbarAction}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        <button
          onClick={handlePublish}
          className="p-2.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors active:scale-95"
          aria-label="Publish"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
