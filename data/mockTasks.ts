import { Task } from '@/types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Highway Bridge Construction Tender',
    description: 'Review and submit proposal for the new highway bridge project',
    assignee: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    priority: 'High',
    dueDate: '22 Dec 24',
    status: 'In Progress',
    commentsCount: 12,
    attachmentsCount: 3
  },
  {
    id: '2',
    title: 'Commercial Building Renovation',
    description: 'Prepare cost estimates for downtown office renovation',
    assignee: {
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    },
    priority: 'High',
    dueDate: '25 Dec 24',
    status: 'To-Do List',
    commentsCount: 8,
    attachmentsCount: 5
  },
  {
    id: '3',
    title: 'Residential Complex Phase 2',
    description: 'Submit tender documents for 50-unit residential project',
    assignee: {
      name: 'Mike Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
    },
    priority: 'Medium',
    dueDate: '28 Dec 24',
    status: 'To-Do List',
    commentsCount: 5,
    attachmentsCount: 2
  },
  {
    id: '4',
    title: 'Airport Terminal Expansion',
    description: 'Finalize technical specifications and submit bid',
    assignee: {
      name: 'Sarah Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    priority: 'High',
    dueDate: '20 Dec 24',
    status: 'In Progress',
    commentsCount: 15,
    attachmentsCount: 7
  },
  {
    id: '5',
    title: 'School Building Construction',
    description: 'Review architectural plans and prepare tender response',
    assignee: {
      name: 'Tom Brown',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom'
    },
    priority: 'Low',
    dueDate: '30 Dec 24',
    status: 'In Progress',
    commentsCount: 6,
    attachmentsCount: 4
  },
  {
    id: '6',
    title: 'Metro Station Development',
    description: 'Gather requirements for new metro station construction',
    assignee: {
      name: 'Emily Davis',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
    },
    priority: 'Medium',
    dueDate: '18 Dec 24',
    status: 'Not Started',
    commentsCount: 3,
    attachmentsCount: 1
  },
  {
    id: '7',
    title: 'Hospital Wing Addition',
    description: 'Prepare detailed cost breakdown for hospital expansion',
    assignee: {
      name: 'Chris Lee',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris'
    },
    priority: 'High',
    dueDate: '15 Dec 24',
    status: 'Not Started',
    commentsCount: 10,
    attachmentsCount: 6
  },
  {
    id: '8',
    title: 'Shopping Mall Renovation',
    description: 'Review tender documents and prepare initial proposal',
    assignee: {
      name: 'Alex Turner',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    priority: 'Low',
    dueDate: '02 Jan 25',
    status: 'Not Started',
    commentsCount: 4,
    attachmentsCount: 2
  },
  {
    id: '9',
    title: 'Water Treatment Plant',
    description: 'Submit technical and financial proposal for water facility',
    assignee: {
      name: 'Lisa Anderson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
    },
    priority: 'High',
    dueDate: '24 Dec 24',
    status: 'To-Do List',
    commentsCount: 9,
    attachmentsCount: 8
  }
];
