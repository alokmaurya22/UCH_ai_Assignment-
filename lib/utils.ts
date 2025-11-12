import { Priority, Status } from '@/types/task';

// Get color classes for priority badges
export function getPriorityColor(priority: Priority): string {
  const colors = {
    Low: 'bg-green-500/20 text-green-400',
    Medium: 'bg-yellow-500/20 text-yellow-400',
    High: 'bg-red-500/20 text-red-400'
  };
  return colors[priority];
}

// Get color classes for status badges
export function getStatusColor(status: Status): string {
  const colors = {
    'Not Started': 'bg-orange-500/20 text-orange-400',
    'To-Do List': 'bg-blue-500/20 text-blue-400',
    'In Progress': 'bg-blue-500/20 text-blue-400',
    'Completed': 'bg-green-500/20 text-green-400'
  };
  return colors[status];
}

// Get color for column header dot
export function getColumnHeaderColor(status: Status): string {
  const colors = {
    'Not Started': 'bg-orange-500',
    'To-Do List': 'bg-blue-500',
    'In Progress': 'bg-blue-500',
    'Completed': 'bg-green-500'
  };
  return colors[status];
}

// Format date string
export function formatDate(dateString: string): string {
  return dateString;
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
