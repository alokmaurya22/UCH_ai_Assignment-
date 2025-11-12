export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0b0f]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm">Loading tasks...</p>
      </div>
    </div>
  );
}
