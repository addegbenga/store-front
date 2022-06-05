import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import AccountSidebar from '../AccountSidebar';
const AccountLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 lg:py-4 ">
      <div className="flex items-center justify-between max-w-5xl p-2 m-auto mb-3 bg-white ">
        <h1 className="text-lg font-bold">
          <Link href="/"> KARA</Link>
        </h1>
        <p className="text-sm font-semibold">MY ACCOUNT</p>
        <p className="text-sm font-semibold ">CERTIFIED</p>
        <FaBars className="cursor-pointer lg:hidden" />
      </div>
      <div className="flex max-w-5xl gap-2 mx-auto ">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
};

export default AccountLayout;
