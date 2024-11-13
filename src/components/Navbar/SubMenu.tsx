import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem as NavItemType } from '../../types/navigation';
import { NavItem } from './NavItem';

interface SubMenuProps {
  items: NavItemType[];
  level: number;
  openItems: string[];
  onToggle: (path: string) => void;
}

export const SubMenu: React.FC<SubMenuProps> = ({ items, level, openItems, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`pl-${level * 4}`}
    >
      {items.map((item) => (
        <div key={item.path}>
          <NavItem
            item={item}
            level={level}
            isOpen={openItems.includes(item.path)}
            onToggle={() => onToggle(item.path)}
          />
          <AnimatePresence>
            {item.children && openItems.includes(item.path) && (
              <SubMenu
                items={item.children}
                level={level + 1}
                openItems={openItems}
                onToggle={onToggle}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};