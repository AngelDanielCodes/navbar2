import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 ml-0 lg:ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;