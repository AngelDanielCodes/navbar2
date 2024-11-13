import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import ConsultasTarot from './ConsultasTarot';
import InformacionTarot from './InformacionTarot';

const Tarot: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PageWrapper
            title="Tarot"
            description="Descubre los secretos del Tarot y obtén guía para tu camino espiritual"
          >
            <div className="prose prose-purple max-w-none">
              <p className="text-lg text-gray-600">
                Bienvenido a la sección de Tarot. Aquí encontrarás consultas personalizadas,
                información sobre diferentes tipos de tiradas y conocimiento profundo sobre
                el arte del Tarot.
              </p>
            </div>
          </PageWrapper>
        }
      />
      <Route path="consultas-tarot/*" element={<ConsultasTarot />} />
      <Route path="informacion-tarot/*" element={<InformacionTarot />} />
    </Routes>
  );
};

export default Tarot;