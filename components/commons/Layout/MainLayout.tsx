import React from 'react';
import Navbar from '@/components/commons/Nav/Navbar';
import TopNavbar from '@/components/commons/Nav/TopNavbar';
import Footer from '@/components/commons/Footer';
import CartModal from '@/components/commons/Cart';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <CartModal />
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
