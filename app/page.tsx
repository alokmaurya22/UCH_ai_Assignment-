'use client';

import { mockTasks } from '@/data/mockTasks';
import Column from '@/components/Column';
import { Status } from '@/types/task';

export default function Home() {
  const statuses: Status[] = ['To-Do List', 'In Progress', 'Not Started'];

  // Group tasks by status
  const getTasksByStatus = (status: Status) => {
    return mockTasks.filter(task => task.status === status);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-white">Tender Tasks</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Tenders"
                className="bg-[#1a1d29] text-white px-4 py-2 pr-10 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-600 w-80"
              />
              <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Notification icon */}
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* Profile */}
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">U</span>
            </div>
          </div>
        </div>

        {/* View toggle and actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-[#1a1d29] text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200">
              List View
            </button>
            <button className="px-4 py-2 bg-transparent text-white rounded-lg border border-orange-500 hover:bg-orange-500/10 transition-all duration-200">
              Board View
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-transparent text-white rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200">
              View Tender Details
            </button>
            <button className="px-4 py-2 bg-transparent text-white rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Columns
            </button>
          </div>
        </div>
      </div>

      {/* Board columns */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {statuses.map(status => {
          const tasks = getTasksByStatus(status);
          return (
            <Column 
              key={status}
              title={status}
              tasks={tasks}
              count={tasks.length}
            />
          );
        })}
      </div>
    </div>
  );
}
