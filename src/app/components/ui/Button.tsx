"use client";

import { ButtonProps } from "../../../types";

export default function Button({ children, loading, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white 
        rounded-xl font-medium transition-all duration-200 
        hover:from-indigo-700 hover:to-indigo-800 
        disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
        transform hover:scale-[1.02] active:scale-[0.98]
        shadow-md hover:shadow-lg
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}