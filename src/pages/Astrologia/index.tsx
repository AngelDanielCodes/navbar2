import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import ConsultasAstrologicas from './ConsultasAstrologicas';
import InformacionAstrologia from './InformacionAstrologia';

const Astrologia: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PageWrapper
            title="Astrología"
            description="Explora los misterios del cosmos y su influencia en tu vida"
          >
            <div className="prose prose-purple max-w-none">
              <p className="text-lg text-gray-600">
                Descubre cómo los astros influyen en tu vida y aprende sobre los
                diferentes aspectos de la astrología moderna y tradicional.
              </p>
            </div>
          </PageWrapper>
        }
      />
      <Route path="consultas-astrologicas/*" element={<ConsultasAstrologicas />} />
      <Route path="informacion-astrologia/*" element={<InformacionAstrologia />} />
    </Routes>
  );
};

export default Astrologia;