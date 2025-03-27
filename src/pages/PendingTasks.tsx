
import React from 'react';
import TaskCard from '@/components/TaskCard';
import { useTaskContext } from '@/context/TaskContext';
import { MainNavigationMenu } from '@/components/NavigationMenu';
import { Clock } from 'lucide-react';
import PixelCharacters from '@/components/PixelCharacters';

const PendingTasks: React.FC = () => {
  const { tasks } = useTaskContext();
  const pendingTasks = tasks.filter(task => task.status !== 'completed');

  return (
    <>
      <MainNavigationMenu />
      <div className="min-h-screen w-full pixel-grid py-8 px-4 sm:px-6 md:py-12 md:px-8 relative overflow-hidden">
        <PixelCharacters />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-pixelDarkGray rounded-none p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] animate-pixel-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-pixelYellow mr-3 rounded-none">
                <Clock size={24} className="text-white pixelate" />
              </div>
              <h1 className="text-3xl font-bold font-pixel">Pending Tasks</h1>
            </div>
            <p className="text-gray-600">Tasks that are still in progress or not started yet.</p>
          </div>

          <div className="mt-4">
            {pendingTasks.length === 0 ? (
              <div className="text-center py-12 bg-white border-4 border-pixelGray p-6 rounded-none shadow-lg">
                <div className="inline-block p-4 rounded-full bg-pixelBlue/10 mb-4">
                  <Clock size={32} className="text-pixelBlue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No pending tasks!</h3>
                <p className="text-gray-500">You don't have any pending tasks. Great job!</p>
              </div>
            ) : (
              pendingTasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingTasks;
