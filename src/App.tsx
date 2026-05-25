import React from 'react';
import Layout from './HOC/Layout/Layout';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './containers/Home/Home';
import Work from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Experience from './containers/Experience/Experience';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/projects" element={<Work />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
