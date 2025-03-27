
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Task, TaskContextType } from '@/types/task';
import { toast } from 'sonner';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

// Sample initial tasks
const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Complete dashboard layout',
    description: 'Finish the pixel art dashboard design',
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    dueDate: new Date(Date.now() + 86400000), // 1 day from now
  },
  {
    id: '2',
    title: 'Create task cards',
    description: 'Design pixel art style task cards with animations',
    status: 'completed',
    priority: 'medium',
    createdAt: new Date(Date.now() - 172800000), // 2 days ago
  },
  {
    id: '3',
    title: 'Implement task filtering',
    description: 'Add filters for task priority and status',
    status: 'todo',
    priority: 'low',
    createdAt: new Date(Date.now() - 43200000), // 12 hours ago
    dueDate: new Date(Date.now() + 259200000), // 3 days from now
  },
];

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    toast.success('Task added successfully');
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
    toast.success('Task updated successfully');
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully');
  };

  const completeTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: 'completed' as const }
          : task
      )
    );
    toast.success('Task completed! 🎉');
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
