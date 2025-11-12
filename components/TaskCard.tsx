import { Task } from '@/types/task';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  // Priority color mapping
  const priorityColors = {
    Low: 'bg-green-500/20 text-green-400',
    Medium: 'bg-yellow-500/20 text-yellow-400',
    High: 'bg-red-500/20 text-red-400'
  };

  // Status badge color
  const statusColors = {
    'Not Started': 'bg-orange-500/20 text-orange-400',
    'To-Do List': 'bg-blue-500/20 text-blue-400',
    'In Progress': 'bg-blue-500/20 text-blue-400',
    'Completed': 'bg-green-500/20 text-green-400'
  };

  return (
    <div className="bg-[#1a1d29] rounded-lg p-4 mb-3 border border-gray-800">
      {/* Status badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-2 py-1 rounded ${statusColors[task.status]}`}>
          {task.status}
        </span>
        <button className="text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h3 className="text-white font-medium mb-2">{task.title}</h3>
      
      {/* Description */}
      <p className="text-gray-400 text-sm mb-3">{task.description}</p>

      {/* Assignee */}
      <div className="flex items-center mb-3">
        <span className="text-gray-400 text-sm mr-2">Assignee</span>
        <img 
          src={task.assignee.avatar} 
          alt={task.assignee.name}
          className="w-6 h-6 rounded-full"
        />
      </div>

      {/* Due date and priority */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-gray-400 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {task.dueDate}
        </div>
        <span className={`text-xs px-2 py-1 rounded ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {/* Comments and attachments */}
      <div className="flex items-center gap-4 text-gray-400 text-sm">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {task.commentsCount} Comments
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
          {task.attachmentsCount} Attachments
        </div>
      </div>
    </div>
  );
}
