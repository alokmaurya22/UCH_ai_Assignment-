# Tender Tasks Board

A modern, dark-themed Kanban board application for managing construction tender tasks. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Level 1: Core UI ✅
- Dark-themed interface with gradient backgrounds
- Multiple status columns (To-Do List, In Progress, Not Started)
- Task cards with complete information:
  - Title and description
  - Assignee with avatar
  - Priority badges (Low, Medium, High)
  - Due dates
  - Comments and attachments count
- Responsive layout with smooth scrolling

### Level 2: Animations & Interactivity ✅
- Smooth hover effects on cards and buttons
- Drag and drop functionality between columns
- Status updates on task movement
- Graceful overflow handling with custom scrollbars
- Interactive UI elements with transitions

### Level 3: Architecture & Comments ✅
- Feature-based folder structure for scalability
- Separation of UI components and data logic
- Task detail page with comment system
- Local state management for comments
- Clean, maintainable codebase

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Drag & Drop:** @hello-pangea/dnd
- **Icons:** Heroicons (SVG)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alokmaurya22/UCH_ai_Assignment-.git
cd tender-tasks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tender-tasks/
├── app/                    # Next.js app directory
│   ├── task/[id]/         # Task detail page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main board page
├── components/            # Reusable UI components
│   └── TaskCard.tsx       # Task card component
├── features/              # Feature-based modules
│   └── board/
│       └── components/    # Board-specific components
├── data/                  # Mock data
│   └── mockTasks.ts       # Sample task data
├── types/                 # TypeScript type definitions
│   ├── task.ts           # Task types
│   └── comment.ts        # Comment types
└── public/               # Static assets
```

## Key Features Explained

### Drag and Drop
Tasks can be dragged between columns to update their status. The board uses `@hello-pangea/dnd` for smooth drag-and-drop interactions.

### Task Details
Click on any task card to view detailed information and add comments. Comments are stored in local state.

### Responsive Design
The board adapts to different screen sizes with horizontal scrolling for columns on smaller screens.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- Components use functional React with hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Comments added where logic needs explanation

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

Alternatively, build and deploy manually:
```bash
npm run build
npm start
```

## Future Enhancements

- Backend integration for persistent data
- User authentication
- Real-time collaboration
- File upload for attachments
- Advanced filtering and search
- Task assignment notifications

## License

MIT

## Author

Alok Maurya
