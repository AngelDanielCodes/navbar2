import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import ConsultasAmor from './ConsultasAmor';
import InformacionAmor from './InformacionAmor';

const Amor: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PageWrapper
            title="Amor y Magia"
            description="Descubre los secretos del amor y la magia para mejorar tus relaciones"
          >
            <div className="prose prose-purple max-w-none">
              <p className="text-lg text-gray-600">
                Explora el mundo del amor desde una perspectiva espiritual y
                descubre cómo la magia puede ayudarte en tus relaciones.
              </p>
            </div>
          </PageWrapper>
        }
      />
      <Route path="consultas-amor/*" element={<ConsultasAmor />} />
      <Route path="informacion-amor/*" element={<InformacionAmor />} />
    </Routes>
  );
};

export default Amor;