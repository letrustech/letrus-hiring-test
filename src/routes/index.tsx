import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Characters from '../pages/Characters';

const RoutesPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personagens" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
