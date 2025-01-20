import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
