
import React, { useState } from 'react';
import PixelHeader from '@/components/PixelHeader';
import TaskCard from '@/components/TaskCard';
import TaskForm from '@/components/TaskForm';
import PixelCharacters from '@/components/PixelCharacters';
import { TaskProvider, useTaskContext } from '@/context/TaskContext';
import { CheckCircle, Circle, Clock, AlertTriangle, Search } from 'lucide-react';

// Filter component for task filtering
const TaskFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="glass-panel rounded-xl p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4 animate-pixel-fade-in">
      <div className="relative w-full md:w-auto flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pixelBlue focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex space-x-2 w-full md:w-auto">
        <button className="pixel-btn flex-1 md:flex-initial px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 flex items-center">
          <Circle size={14} className="mr-1.5 text-pixelGray" /> All
        </button>
        <button className="pixel-btn flex-1 md:flex-initial px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 flex items-center">
          <AlertTriangle size={14} className="mr-1.5 text-pixelRed" /> High
        </button>
        <button className="pixel-btn flex-1 md:flex-initial px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 flex items-center">
          <Clock size={14} className="mr-1.5 text-pixelYellow" /> In Progress
        </button>
        <button className="pixel-btn flex-1 md:flex-initial px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 flex items-center">
          <CheckCircle size={14} className="mr-1.5 text-pixelGreen" /> Completed
        </button>
      </div>
    </div>
  );
};

// TaskList component to display all tasks
const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();
  
  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-block p-4 rounded-full bg-pixelBlue/10 mb-4">
            <CheckCircle size={32} className="text-pixelBlue" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">All caught up!</h3>
          <p className="text-gray-500">You don't have any tasks yet. Add a new one to get started.</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} />
        ))
      )}
    </div>
  );
};

// Main Index component that brings everything together
const Index: React.FC = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen w-full pixel-grid py-8 px-4 sm:px-6 md:py-12 md:px-8 relative overflow-hidden">
        <PixelCharacters />
        <div className="max-w-4xl mx-auto">
          <PixelHeader />
          <TaskForm />
          <TaskFilter />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default Index;
