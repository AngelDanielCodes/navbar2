import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import HoroscopoDiario from './HoroscopoDiario';
import HoroscopoSignos from './HoroscopoSignos';
import InformacionHoroscopo from './InformacionHoroscopo';

const Horoscopo: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PageWrapper
            title="Horóscopo"
            description="Tu guía diaria con predicciones personalizadas según tu signo zodiacal"
          >
            <div className="prose prose-purple max-w-none">
              <p className="text-lg text-gray-600">
                Consulta tu horóscopo diario, semanal y mensual. Descubre qué te
                deparan los astros en amor, trabajo y salud.
              </p>
            </div>
          </PageWrapper>
        }
      />
      <Route path="horoscopo-diario/*" element={<HoroscopoDiario />} />
      <Route path="horoscopo-signos/*" element={<HoroscopoSignos />} />
      <Route path="informacion-horoscopo/*" element={<InformacionHoroscopo />} />
    </Routes>
  );
};

export default Horoscopo;