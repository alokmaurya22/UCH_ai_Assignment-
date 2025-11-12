export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Not Started' | 'To-Do List' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: {
    name: string;
    avatar: string;
  };
  priority: Priority;
  dueDate: string;
  status: Status;
  commentsCount: number;
  attachmentsCount: number;
}
