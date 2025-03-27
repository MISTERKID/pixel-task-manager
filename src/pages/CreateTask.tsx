
import React from 'react';
import TaskForm from '@/components/TaskForm';
import { MainNavigationMenu } from '@/components/NavigationMenu';
import { PlusCircle } from 'lucide-react';
import PixelCharacters from '@/components/PixelCharacters';

const CreateTask: React.FC = () => {
  return (
    <>
      <MainNavigationMenu />
      <div className="min-h-screen w-full pixel-grid py-8 px-4 sm:px-6 md:py-12 md:px-8 relative overflow-hidden">
        <PixelCharacters />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-pixelDarkGray rounded-none p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] animate-pixel-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-pixelPink mr-3 rounded-none">
                <PlusCircle size={24} className="text-white pixelate" />
              </div>
              <h1 className="text-3xl font-bold font-pixel">Create New Task</h1>
            </div>
            <p className="text-gray-600">Add a new task to your list!</p>
          </div>

          <TaskForm />
        </div>
      </div>
    </>
  );
};

export default CreateTask;
