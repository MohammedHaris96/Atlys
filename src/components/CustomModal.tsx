import { useLockBodyScroll } from "../hooks/useLookByScroll";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function CustomModal({ isOpen, onClose, children, footer }: ModalProps) {
  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 animate-fade-in bg-black/50"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg animate-scale-in rounded-3xl bg-gray-200 p-5 shadow-xl">
        <div className="rounded-3xl bg-white p-8">{children}</div>
        {footer && <div className="pt-4 text-center">{footer}</div>}
      </div>
    </div>
  );
}
