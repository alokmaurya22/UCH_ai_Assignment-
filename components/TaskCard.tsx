import { Task } from '@/types/task';
import { getPriorityColor, getStatusColor } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {

  return (
    <div className="card-hover bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group">
      {/* Status badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-3 py-1.5 rounded-lg font-semibold ${getStatusColor(task.status)} shadow-sm`}>
          {task.status}
        </span>
        <button className="text-gray-500 hover:text-white hover:bg-slate-700/50 transition-all opacity-0 group-hover:opacity-100 p-1.5 rounded-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold mb-2 text-[15px] leading-tight group-hover:text-blue-400 transition-colors">{task.title}</h3>
      
      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{task.description}</p>

      {/* Assignee */}
      <div className="flex items-center gap-2 mb-4 p-2 bg-slate-700/30 rounded-lg">
        <img 
          src={task.assignee.avatar} 
          alt={task.assignee.name}
          className="w-7 h-7 rounded-full ring-2 ring-slate-600 shadow-md"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 font-medium">Assignee</p>
          <p className="text-sm text-white font-medium truncate">{task.assignee.name}</p>
        </div>
      </div>

      {/* Due date and priority */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-gray-400 text-xs bg-slate-700/30 px-3 py-1.5 rounded-lg">
          <svg className="w-4 h-4 mr-1.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {task.dueDate}
        </div>
        <span className={`text-xs px-3 py-1.5 rounded-lg font-semibold ${getPriorityColor(task.priority)} shadow-sm`}>
          {task.priority}
        </span>
      </div>

      {/* Comments and attachments */}
      <div className="flex items-center gap-4 text-gray-400 text-xs border-t border-slate-700/50 pt-3">
        <div className="flex items-center hover:text-white transition-colors">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-medium">{task.commentsCount}</span>
        </div>
        <div className="flex items-center hover:text-white transition-colors">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
          <span className="font-medium">{task.attachmentsCount}</span>
        </div>
      </div>
    </div>
  );
}
