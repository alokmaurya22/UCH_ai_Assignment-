interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = 'No tasks in this column' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm flex items-center justify-center border border-slate-700/50">
        <svg 
          className="w-10 h-10 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
      </div>
      <p className="text-gray-400 text-sm font-medium">{message}</p>
      <p className="text-gray-600 text-xs mt-1">Drag tasks here or click + to add</p>
    </div>
  );
}
