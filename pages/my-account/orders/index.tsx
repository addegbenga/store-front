import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { NextPageWithLayout } from '../../page';
import AccountLayout from '@/components/myaccount/AccountLayout';
import Button from '@/components/ui/Button';
const MyOrders: NextPageWithLayout = () => {
  return (
    <div className="w-full px-2 lg:px-0 ">
      <div className="grid gap-3">
        <div className="grid gap-2 bg-white shadow py-7 px-9">
          <FiShoppingBag size={35} />
          <h1 className="text-2xl font-bold ">MY ORDERS</h1>
        </div>
        <div className="flex flex-col items-center gap-4 pt-12 bg-white pb-7">
          <FiShoppingBag className="mt-4 mb-2 text-4xl" />
          <div className="text-center">
            <h1 className="font-semibold">YOU CURRENTLY HAVE NO ORDERS</h1>
            <p>Best get shopping KARA....</p>
          </div>
          <Button className="w-2/5 p-3 px-4 font-semibold text-white bg-black">
            START SHOPPING
          </Button>
        </div>
      </div>
    </div>
  );
};

MyOrders.getLayout = (page) => {
  return <AccountLayout>{page}</AccountLayout>;
};

export default MyOrders;
