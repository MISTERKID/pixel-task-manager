import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, Settings, PlusCircle, Rabbit, CheckCircle2 } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const BouncingRabbit = () => {
  return (
    <div className="relative">
      <div className="animate-bounce-slow">
        <div className="relative">
          <Rabbit size={28} className="text-pixelPurple pixelate drop-shadow-lg" />
          <Rabbit size={28} className="text-black pixelate absolute inset-0 [stroke-width:1.5]" />
        </div>
      </div>
    </div>
  );
};

const MenuLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <NavigationMenuItem>
    <Link to={href}>
      <NavigationMenuLink 
        className={cn(
          "cursor-pointer font-pixel border-4 border-pixelDarkGray shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] px-4 py-1.5 transition-all duration-200 transform hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)] block relative overflow-hidden group",
          isActive 
            ? "bg-pixelBlue text-white border-b-pixelDarkGray" 
            : "bg-white text-pixelDarkGray hover:bg-gray-50"
        )}
      >
        <span className="relative z-10 flex items-center">
          {children}
        </span>
        {!isActive && (
          <span className="absolute inset-0 bg-gradient-to-r from-pixelPurple/5 to-pixelBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        )}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

export const MainNavigationMenu: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="sticky top-0 z-50 w-full py-4 bg-white border-b-4 border-pixelDarkGray shadow-[0_4px_0px_0px_rgba(0,0,0,0.1)] px-4">
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0) scale(1) rotate(0deg);
            }
            50% {
              transform: translateY(-12px) scale(1.1) rotate(-5deg);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 1s infinite;
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-white p-3 rounded-lg border-4 border-pixelPurple shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform transition-all duration-300 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]">
              <BouncingRabbit />
            </div>
            <span className="font-pixel text-2xl font-bold text-pixelPurple tracking-wider group-hover:text-pixelPurple/90 transition-colors duration-300 relative">
              <span className="relative z-10">Pixel Tasks</span>
              <span className="absolute inset-0 bg-pixelPurple/5 blur-sm transform -skew-x-12 group-hover:bg-pixelPurple/10 transition-colors duration-300"></span>
            </span>
          </Link>
        </div>
        
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex flex-wrap justify-center gap-2">
            <MenuLink href="/" isActive={currentPath === '/'}>
              <Home size={16} className="mr-2 inline-block animate-float" /> Home
            </MenuLink>
            
            <MenuLink href="/pending" isActive={currentPath === '/pending'}>
              <Clock size={16} className="mr-2 inline-block animate-float" style={{ animationDelay: '0.2s' }} /> Pending
            </MenuLink>
            
            <MenuLink href="/completed" isActive={currentPath === '/completed'}>
              <CheckCircle2 size={16} className="mr-2 inline-block animate-float" style={{ animationDelay: '0.4s' }} /> Completed
            </MenuLink>
            
            <MenuLink href="/create" isActive={currentPath === '/create'}>
              <PlusCircle size={16} className="mr-2 inline-block animate-float" style={{ animationDelay: '0.6s' }} /> Create
            </MenuLink>
            
            <MenuLink href="/settings" isActive={currentPath === '/settings'}>
              <Settings size={16} className="mr-2 inline-block animate-float" style={{ animationDelay: '0.8s' }} /> Settings
            </MenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
