import React from 'react';
import AccountSidebar from '../AccountSidebar';
const AccountLayout: React.FC = ({ children }) => {
  return (
    <div className="bg-black ">
      <div className="flex max-w-5xl gap-2 mx-auto bg-red-400">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
};

export default AccountLayout;
