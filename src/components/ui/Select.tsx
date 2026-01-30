"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, placeholder, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-text mb-1.5"
        >
          {label}
          {props.required && <span className="text-secondary ml-1">*</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white text-text",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "transition-colors appearance-none cursor-pointer",
            "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%234b5563%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')]",
            "bg-[length:20px] bg-[right_12px_center] bg-no-repeat",
            error
              ? "border-secondary focus:ring-secondary"
              : "border-gray-200",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1.5 text-sm text-secondary">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
