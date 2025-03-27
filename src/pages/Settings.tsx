
import React from 'react';
import { MainNavigationMenu } from '@/components/NavigationMenu';
import { Settings as SettingsIcon, Moon, Sun, Palette, VolumeX, Volume2 } from 'lucide-react';
import PixelCharacters from '@/components/PixelCharacters';

const Settings: React.FC = () => {
  return (
    <>
      <MainNavigationMenu />
      <div className="min-h-screen w-full pixel-grid py-8 px-4 sm:px-6 md:py-12 md:px-8 relative overflow-hidden">
        <PixelCharacters />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-pixelDarkGray rounded-none p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] animate-pixel-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-pixelPurple mr-3 rounded-none">
                <SettingsIcon size={24} className="text-white pixelate" />
              </div>
              <h1 className="text-3xl font-bold font-pixel">Settings</h1>
            </div>
            <p className="text-gray-600">Customize your task management experience!</p>
          </div>

          <div className="bg-white border-4 border-pixelGray rounded-none p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Moon size={20} className="mr-3 text-pixelBlue" />
                  <div>
                    <h3 className="font-medium font-pixel">Dark Mode</h3>
                    <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Palette size={20} className="mr-3 text-pixelPink" />
                  <div>
                    <h3 className="font-medium font-pixel">Theme Color</h3>
                    <p className="text-sm text-gray-500">Choose your preferred theme color</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 rounded-full bg-pixelBlue cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-pixelPink cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-pixelGreen cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-pixelYellow cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-pixelPurple cursor-pointer"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Volume2 size={20} className="mr-3 text-pixelGreen" />
                  <div>
                    <h3 className="font-medium font-pixel">Sound Effects</h3>
                    <p className="text-sm text-gray-500">Enable or disable sound effects</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-pixelGreen rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
