import React from 'react';
import AccountSidebar from '../AccountSidebar';
const AccountLayout: React.FC = ({ children }) => {
  return (
    <div className="py-4 bg-gray-100 ">
      <div className="flex items-center justify-between max-w-5xl p-2 m-auto mb-4 bg-white ">
        <h1 className="text-lg font-bold">KARA</h1>
        <p className="text-sm font-semibold">MY ACCOUNT</p>
        <p className="text-sm font-light ">CERTIFIED</p>
      </div>
      <div className="flex max-w-5xl gap-2 mx-auto ">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
};

export default AccountLayout;
