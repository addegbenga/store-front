import React from 'react';
import { NextPageWithLayout } from '../page';
import AccountLayout from '@/components/myaccount/AccountLayout';
const MyAccount: NextPageWithLayout = () => {
  return (
    <div className="hidden w-full bg-white shadow lg:block h-fit">
      <div className="grid gap-1 px-3 py-10">
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black rounded w-fit">
          WELCOME TO
        </h1>
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black rounded w-fit">
          YOUR ACCOUNT
        </h1>
      </div>
    </div>
  );
};
MyAccount.getLayout = (page) => {
  return <AccountLayout>{page}</AccountLayout>;
};

export default MyAccount;
