
import React, { useState } from 'react';
import { useTaskContext } from '@/context/TaskContext';
import { Priority, TaskStatus } from '@/types/task';
import { Plus, Calendar } from 'lucide-react';

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [status, setStatus] = useState<TaskStatus>('todo');
  const [dueDate, setDueDate] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    addTask({
      title,
      description,
      priority,
      status,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('todo');
    setDueDate('');
    setIsFormOpen(false);
  };
  
  return (
    <div className="mb-8 w-full">
      {!isFormOpen ? (
        <button
          onClick={() => setIsFormOpen(true)}
          className="pixel-btn w-full bg-pixelBlue text-white py-3 rounded-xl shadow-md flex items-center justify-center font-medium animate-pixel-fade-in"
        >
          <Plus size={18} className="mr-2" /> Add New Task
        </button>
      ) : (
        <div className="glass-panel rounded-xl p-6 animate-pixel-slide-up">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Task Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pixelBlue focus:border-transparent"
                placeholder="What needs to be done?"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pixelBlue focus:border-transparent"
                placeholder="Add some details..."
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pixelBlue focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as TaskStatus)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pixelBlue focus:border-transparent"
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-gray-400" />
                  </div>
                  <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pixelBlue focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="pixel-btn px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="pixel-btn px-6 py-2 rounded-lg bg-pixelBlue text-white font-medium shadow-sm"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
