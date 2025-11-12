import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Status, Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';
import EmptyState from '@/components/EmptyState';
import { getColumnHeaderColor } from '@/lib/utils';

interface BoardColumnProps {
  status: Status;
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
}

export default function BoardColumn({ status, tasks, onTaskClick }: BoardColumnProps) {

  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 min-w-[340px] max-w-[340px] border border-slate-700/50 hover:border-slate-600/50 transition-all shadow-xl">
      {/* Column header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
        <div className="flex items-center gap-2.5">
          <div className={`w-3 h-3 rounded-full ${getColumnHeaderColor(status)} shadow-lg`}></div>
          <h2 className="text-white font-semibold text-sm">{status}</h2>
          <span className="bg-slate-700/50 text-gray-300 text-xs px-2.5 py-1 rounded-full font-medium">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all p-1.5 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all p-1.5 rounded-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Droppable area for drag and drop */}
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[300px] max-h-[calc(100vh-380px)] overflow-y-auto pr-2 ${
              snapshot.isDraggingOver ? 'bg-blue-500/10 rounded-xl p-2 border-2 border-dashed border-blue-500/30' : ''
            }`}
          >
            {tasks.length === 0 ? (
              <EmptyState message="No tasks yet" />
            ) : (
              <div className="space-y-3">
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${snapshot.isDragging ? 'opacity-70 rotate-3 scale-105' : ''} transition-all`}
                        onClick={() => onTaskClick(task.id)}
                      >
                        <TaskCard task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
