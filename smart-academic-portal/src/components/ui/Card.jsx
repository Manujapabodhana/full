export default function Card({ title, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-gray-200 p-4 bg-white shadow-sm ${className}`}>
      {title && <div className="mb-2 font-semibold">{title}</div>}
      {children}
    </div>
  );
}
