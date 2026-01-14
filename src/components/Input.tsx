import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-xl bg-gray-100 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
