import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Randomize1 from './components/randomize1';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Randomize1 />} />

          </Routes>
      </BrowserRouter>
    </>
  );
}