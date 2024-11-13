import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import InterpretacionAdivinacion from './InterpretacionAdivinacion';
import HechizosRituales from './HechizosRituales';
import DiccionarioEsoterico from './DiccionarioEsoterico';

const Esoterismo: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PageWrapper
            title="Esoterismo"
            description="Adéntrate en el mundo del conocimiento esotérico y místico"
          >
            <div className="prose prose-purple max-w-none">
              <p className="text-lg text-gray-600">
                Descubre las artes místicas y esotéricas, desde la interpretación
                de sueños hasta los rituales ancestrales.
              </p>
            </div>
          </PageWrapper>
        }
      />
      <Route path="interpretacion-adivinacion/*" element={<InterpretacionAdivinacion />} />
      <Route path="hechizos-rituales/*" element={<HechizosRituales />} />
      <Route path="diccionario-esoterico/*" element={<DiccionarioEsoterico />} />
    </Routes>
  );
};

export default Esoterismo;