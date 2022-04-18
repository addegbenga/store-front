import React from 'react';
import Navbar from '@/components/commons/Nav/Navbar';
import TopNavbar from '@/components/commons/Nav/TopNavbar';
import Footer from '@/components/commons/Footer';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
