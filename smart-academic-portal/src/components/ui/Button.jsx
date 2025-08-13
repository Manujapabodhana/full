export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium border border-gray-200 hover:bg-gray-100 active:scale-[.99] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
