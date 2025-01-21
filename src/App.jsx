import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout';
import MainPage from './pages/mainpage';
import GalleryPage from './pages/gallerypage';
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
              <GalleryPage />
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
