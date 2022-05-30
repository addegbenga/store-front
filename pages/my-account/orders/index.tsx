import React from 'react';
import { NextPageWithLayout } from '../../page';
import AccountLayout from '@/components/myaccount/AccountLayout';
const MyOrders: NextPageWithLayout = () => {
  return (
    <div className="w-full bg-red-300">
      <div className="grid gap-1">
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black w-fit">
          WELCOME TO MY ORDERS PAGE
        </h1>
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black w-fit">
          YOUR ACCOUNT
        </h1>
      </div>
    </div>
  );
};
MyOrders.getLayout = (page) => {
  return <AccountLayout>{page}</AccountLayout>;
};

export default MyOrders;
