import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Místico - Portal Esotérico</title>
        <meta name="description" content="Descubre el mundo del tarot, astrología, horóscopo, numerología y esoterismo en Místico" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            Bienvenido a Místico
          </h1>
          <p className="text-xl text-gray-600">
            Tu portal hacia el conocimiento esotérico y espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <section.icon className="w-8 h-8 text-purple-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const sections = [
  {
    title: 'Tarot',
    description: 'Descubre los secretos de las cartas y obtén guía para tu camino.',
    icon: Sparkles
  },
  // Add more sections here
];

export default Home;