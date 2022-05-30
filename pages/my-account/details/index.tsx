import React from 'react';
import { NextPageWithLayout } from '../../page';
import AccountLayout from '@/components/myaccount/AccountLayout';
const AccountDetails: NextPageWithLayout = () => {
  return (
    <div className="w-full bg-yellow-300">
      <div className="grid gap-1">
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black w-fit">
          WELCOME TO ACCOUNT DETAILS PAGE
        </h1>
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black w-fit">
          YOUR ACCOUNT
        </h1>
      </div>
    </div>
  );
};
AccountDetails.getLayout = (page) => {
  return <AccountLayout>{page}</AccountLayout>;
};

export default AccountDetails;
