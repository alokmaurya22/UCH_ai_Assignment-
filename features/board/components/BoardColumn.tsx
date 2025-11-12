import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Status, Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';

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
    <div className="bg-[#0f1117] rounded-lg p-4 min-w-[320px] max-w-[320px]">
      {/* Column header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getHeaderColor()}`}></div>
          <h2 className="text-white font-medium">{status}</h2>
          <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
            className={`space-y-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent ${
              snapshot.isDraggingOver ? 'bg-blue-500/5 rounded-lg' : ''
            }`}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={snapshot.isDragging ? 'opacity-50' : ''}
                    onClick={() => onTaskClick(task.id)}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
