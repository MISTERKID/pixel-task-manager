import React from 'react';
import { Task } from '@/types/task';
import { Clock, Calendar, CheckCircle, Edit, Trash2, AlertTriangle } from 'lucide-react';
import { useTaskContext } from '@/context/TaskContext';
import { formatDistanceToNow } from 'date-fns';

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  const { updateTask, deleteTask, completeTask } = useTaskContext();
  
  const priorityColors = {
    low: 'bg-pixelGreen',
    medium: 'bg-pixelYellow',
    high: 'bg-pixelRed',
  };

  const statusColors = {
    'todo': 'border-l-pixelGray',
    'in-progress': 'border-l-pixelYellow',
    'completed': 'border-l-pixelGreen',
  };
  
  const statusText = {
    'todo': 'To Do',
    'in-progress': 'In Progress',
    'completed': 'Completed',
  };

  const handleComplete = () => {
    if (task.status !== 'completed') {
      completeTask(task.id);
    }
  };

  return (
    <div 
      className={`pixel-card glass-panel rounded-xl border-l-4 ${statusColors[task.status]} p-4 sm:p-5 mb-4 flex flex-col animate-pixel-fade-in shadow-sm`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
        <div className="flex items-center">
          <span className={`pixel-indicator ${priorityColors[task.priority]}`}></span>
          <span className="text-xs font-medium text-gray-500">
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {task.status === 'completed' ? (
            <span className="text-xs font-medium text-pixelGreen flex items-center">
              <CheckCircle size={14} className="mr-1" /> {statusText[task.status]}
            </span>
          ) : (
            <span className="text-xs font-medium text-gray-500">
              {statusText[task.status]}
            </span>
          )}
        </div>
      </div>
      
      <h3 className={`text-base sm:text-lg font-semibold mb-2 ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
        {task.title}
      </h3>
      
      {task.description && (
        <p className="text-gray-600 text-sm mb-3">
          {task.description}
        </p>
      )}
      
      <div className="mt-auto pt-3 flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-2 sm:gap-0 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <Calendar size={14} className="mr-1" />
          <span>Created {formatDistanceToNow(task.createdAt, { addSuffix: true })}</span>
        </div>
        
        {task.dueDate && (
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={14} className="mr-1" />
            <span>Due {formatDistanceToNow(task.dueDate, { addSuffix: true })}</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row mt-4 gap-2 sm:space-x-2">
        {task.status !== 'completed' && (
          <button 
            onClick={handleComplete} 
            className="pixel-btn flex-1 bg-pixelGreen/90 text-white py-1.5 px-3 rounded-md text-sm shadow-sm"
          >
            <CheckCircle size={14} className="mr-1 inline-block" /> Complete
          </button>
        )}
        
        <button 
          onClick={() => {}} 
          className="pixel-btn flex-1 bg-white text-gray-700 py-1.5 px-3 rounded-md text-sm shadow-sm border border-gray-200"
        >
          <Edit size={14} className="mr-1 inline-block" /> Edit
        </button>
        
        <button 
          onClick={() => deleteTask(task.id)} 
          className="pixel-btn flex-1 bg-white text-red-500 py-1.5 px-3 rounded-md text-sm shadow-sm border border-red-200"
        >
          <Trash2 size={14} className="mr-1 inline-block" /> Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
