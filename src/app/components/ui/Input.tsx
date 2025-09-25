"use client";

import { InputProps } from "../../../types";

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="text-gray-600 mb-4">
      <label className="text-gray-700 block text-sm font-medium mb-1">{label}</label>
      <input
        {...props}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
        focus:ring-2 focus:ring-indigo-500 
        ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
