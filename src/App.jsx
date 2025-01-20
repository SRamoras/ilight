import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout';
import MainPage from './pages/mainpage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          } 
        />
        <Route 
          path="/gallery" 
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
