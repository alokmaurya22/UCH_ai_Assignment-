import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Status, Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';
import EmptyState from '@/components/EmptyState';

interface BoardColumnProps {
  status: Status;
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
}

export default function BoardColumn({ status, tasks, onTaskClick }: BoardColumnProps) {
  // Column header color based on status
  const getHeaderColor = () => {
    switch(status) {
      case 'To-Do List': return 'bg-blue-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Not Started': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-[#13151c] rounded-xl p-4 min-w-[340px] max-w-[340px] border border-gray-800/50">
      {/* Column header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${getHeaderColor()}`}></div>
          <h2 className="text-white font-medium text-sm">{status}</h2>
          <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded-md font-medium">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-gray-500 hover:text-white transition-colors p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-white transition-colors p-1">
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
            className={`min-h-[200px] max-h-[calc(100vh-250px)] overflow-y-auto pr-1 ${
              snapshot.isDraggingOver ? 'bg-blue-500/5 rounded-lg p-2' : ''
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
                        className={snapshot.isDragging ? 'opacity-60 rotate-2' : ''}
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
