"use client";

import { ButtonProps } from "../../../types";

export default function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
      hover:bg-indigo-700 disabled:bg-gray-400 flex items-center justify-center"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
