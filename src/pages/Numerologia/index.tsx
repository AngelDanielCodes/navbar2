import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import CalculosNumerologicos from './CalculosNumerologicos';
import InformacionNumerologia from './InformacionNumerologia';

const Numerologia: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PageWrapper
            title="Numerología"
            description="Descubre el significado oculto de los números en tu vida"
          >
            <div className="prose prose-purple max-w-none">
              <p className="text-lg text-gray-600">
                Explora cómo los números influyen en tu destino y aprende a
                interpretar su significado en diferentes aspectos de tu vida.
              </p>
            </div>
          </PageWrapper>
        }
      />
      <Route path="calculos-numerologicos/*" element={<CalculosNumerologicos />} />
      <Route path="informacion-numerologia/*" element={<InformacionNumerologia />} />
    </Routes>
  );
};

export default Numerologia;