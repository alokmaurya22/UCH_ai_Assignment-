'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { mockTasks } from '@/data/mockTasks';
import { Status, Task } from '@/types/task';
import BoardHeader from '@/features/board/components/BoardHeader';
import BoardColumn from '@/features/board/components/BoardColumn';

export default function Home() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const statuses: Status[] = ['To-Do List', 'In Progress', 'Not Started'];

  // Group tasks by status
  const getTasksByStatus = (status: Status) => {
    return tasks.filter(task => task.status === status);
  };

  // Handle drag end - updates task status when dropped
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId as Status;
    
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === draggableId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Navigate to task detail page
  const handleTaskClick = (taskId: string) => {
    router.push(`/task/${taskId}`);
  };

  return (
    <div className="min-h-screen p-6 bg-[#0a0b0f]">
      <BoardHeader />

      {/* Board columns with drag and drop */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-5 overflow-x-auto pb-4">
          {statuses.map(status => (
            <BoardColumn
              key={status}
              status={status}
              tasks={getTasksByStatus(status)}
              onTaskClick={handleTaskClick}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
