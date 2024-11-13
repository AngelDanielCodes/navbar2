import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <HomeIcon className="w-5 h-5" />
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;