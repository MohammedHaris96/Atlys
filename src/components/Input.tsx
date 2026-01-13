import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 border border-gray-200 rounded-xl text-sm
            placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary
            transition-colors duration-200 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "nput";
