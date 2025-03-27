import React from 'react';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

const PixelHeader: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }).format(currentDate);

  return (
    <header className="w-full mb-4 sm:mb-8">
      <div className="bg-white border-4 border-pixelDarkGray rounded-none p-4 sm:p-6 mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] animate-pixel-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="w-full md:w-auto">
            <div className="inline-flex items-center mb-1 px-2 py-1 bg-pixelBlue text-white rounded-none text-xs font-pixel">
              <Clock size={12} className="mr-1 pixelate" />
              <span className="uppercase tracking-wide">PIXEL TASK MANAGER APP</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pixelDarkGray mb-2 font-pixel">
              My Tasks
            </h1>
            <p className="text-gray-500 flex items-center font-pixel text-sm sm:text-base">
              <Calendar size={16} className="mr-2 pixelate" /> 
              {formattedDate}
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 sm:space-x-3 animate-pixel-slide-up">
            <div className="px-3 sm:px-4 py-2 sm:py-3 rounded-none bg-white border-2 border-pixelGray shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] flex items-center">
              <div className="mr-2 sm:mr-3 p-2 rounded-none bg-pixelGreen">
                <CheckCircle2 size={16} className="text-white pixelate" />
              </div>
              <div className="font-pixel">
                <p className="text-xs text-gray-500">Completed</p>
                <p className="font-semibold text-sm sm:text-base">12 tasks</p>
              </div>
            </div>
            
            <div className="px-3 sm:px-4 py-2 sm:py-3 rounded-none bg-white border-2 border-pixelGray shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] flex items-center">
              <div className="mr-2 sm:mr-3 p-2 rounded-none bg-pixelYellow">
                <Clock size={16} className="text-white pixelate" />
              </div>
              <div className="font-pixel">
                <p className="text-xs text-gray-500">In Progress</p>
                <p className="font-semibold text-sm sm:text-base">5 tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PixelHeader;
