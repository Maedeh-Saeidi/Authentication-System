"use client";

import { InputProps } from "../../../types";

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        {...props}
        className={`
          w-full px-4 py-3 border-2 rounded-xl focus:outline-none 
          transition-all duration-200
          focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 text-gray-800
          ${error
            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
            : "border-gray-200 focus:border-indigo-500"
          }
          placeholder-gray-400
          ${className}
        `}
      />
      {error && (
        <div className="flex items-center gap-1 mt-2">
          <span className="text-red-500 text-sm">⚠</span>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}