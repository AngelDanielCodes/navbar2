import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SubMenu } from './SubMenu';
import { navItems } from '../../data/navigationData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (path: string) => {
    setOpenItems(prev => 
      prev.includes(path) 
        ? prev.filter(item => item !== path)
        : [...prev, path]
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md lg:hidden"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="h-full overflow-y-auto py-16 lg:py-8 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
          <div className="px-4 mb-8">
            <h1 className="text-2xl font-bold text-purple-600">Místico</h1>
          </div>
          <SubMenu
            items={navItems}
            level={0}
            openItems={openItems}
            onToggle={toggleItem}
          />
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;