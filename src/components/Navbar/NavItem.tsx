import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavItem as NavItemType } from '../../types/navigation';

interface NavItemProps {
  item: NavItemType;
  level: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ item, level, isOpen, onToggle }) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex-grow py-2 px-4 text-gray-700 hover:bg-purple-50 transition-colors duration-200
            ${isActive ? 'text-purple-600 font-semibold bg-purple-50' : ''}`
          }
        >
          <span className="line-clamp-1">{item.title}</span>
        </NavLink>
        {item.children && (
          <button
            onClick={onToggle}
            className="p-2 hover:bg-purple-50 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label={`Toggle ${item.title} submenu`}
          >
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};