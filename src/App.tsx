import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Lazy load page components
const Tarot = React.lazy(() => import('./pages/Tarot'));
const Astrologia = React.lazy(() => import('./pages/Astrologia'));
const Horoscopo = React.lazy(() => import('./pages/Horoscopo'));
const Amor = React.lazy(() => import('./pages/Amor'));
const Numerologia = React.lazy(() => import('./pages/Numerologia'));
const Esoterismo = React.lazy(() => import('./pages/Esoterismo'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="tarot/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Tarot />
                </Suspense>
              }
            />
            <Route
              path="astrologia/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Astrologia />
                </Suspense>
              }
            />
            <Route
              path="horoscopo/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Horoscopo />
                </Suspense>
              }
            />
            <Route
              path="amor/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Amor />
                </Suspense>
              }
            />
            <Route
              path="numerologia/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Numerologia />
                </Suspense>
              }
            />
            <Route
              path="esoterismo/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Esoterismo />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;