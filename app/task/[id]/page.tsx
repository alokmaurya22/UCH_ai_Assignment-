'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockTasks } from '@/data/mockTasks';
import { Comment } from '@/types/comment';

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const task = mockTasks.find(t => t.id === params.id);
  
  // Local state for comments
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      content: 'This looks good. Let me review the documents.',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      author: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
      content: 'I have added the required attachments.',
      timestamp: '5 hours ago'
    }
  ]);
  
  const [newComment, setNewComment] = useState('');

  if (!task) {
    return <div className="text-white p-6">Task not found</div>;
  }

  // Priority color mapping
  const priorityColors = {
    Low: 'bg-green-500/20 text-green-400',
    Medium: 'bg-yellow-500/20 text-yellow-400',
    High: 'bg-red-500/20 text-red-400'
  };

  // Handle comment submission
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Current User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User',
      content: newComment,
      timestamp: 'Just now'
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="min-h-screen p-6">
      {/* Back button */}
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Board
      </button>

      <div className="max-w-4xl mx-auto">
        {/* Task header */}
        <div className="bg-[#1a1d29] rounded-lg p-6 mb-6 border border-gray-800">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">{task.title}</h1>
              <p className="text-gray-400">{task.description}</p>
            </div>
            <span className={`text-xs px-3 py-1 rounded ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
          </div>

          {/* Task metadata */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700">
            <div>
              <p className="text-gray-400 text-sm mb-2">Status</p>
              <p className="text-white">{task.status}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Due Date</p>
              <p className="text-white">{task.dueDate}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Assignee</p>
              <div className="flex items-center gap-2">
                <img 
                  src={task.assignee.avatar} 
                  alt={task.assignee.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-white">{task.assignee.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments section */}
        <div className="bg-[#1a1d29] rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Comments ({comments.length})
          </h2>

          {/* Add comment form */}
          <div className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full bg-[#0f1117] text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-600 resize-none"
              rows={3}
            />
            <button
              onClick={handleAddComment}
              className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Add Comment
            </button>
          </div>

          {/* Comments list */}
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-3">
                <img 
                  src={comment.avatar} 
                  alt={comment.author}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">{comment.author}</span>
                    <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-300">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
