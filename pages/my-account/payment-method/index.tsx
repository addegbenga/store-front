import React from 'react';
import MediaQuery from 'react-responsive';
import { NextPageWithLayout } from '../../page';
import AccountLayout from '@/components/myaccount/AccountLayout';
const MyPayment: NextPageWithLayout = () => {
  return (
    <div className="w-full bg-red-300">
      <div className="grid gap-1">
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black w-fit">
          WELCOME TO MY PAYMENTS PAGE
        </h1>
        <h1 className="px-3 py-2 text-3xl font-bold text-white bg-black w-fit">
          YOUR ACCOUNT
        </h1>
      </div>
    </div>
  );
};
MyPayment.getLayout = (page) => {
  return (
    <MediaQuery minWidth={1224}>
      {(matches: any) =>
        matches ? <AccountLayout>{page}</AccountLayout> : <>{page}</>
      }
    </MediaQuery>
  );
};

export default MyPayment;
