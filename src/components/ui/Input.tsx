"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-text mb-1.5"
        >
          {label}
          {props.required && <span className="text-secondary ml-1">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white text-text placeholder:text-muted/60",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "transition-colors",
            error
              ? "border-secondary focus:ring-secondary"
              : "border-gray-200",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-secondary">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-muted">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
