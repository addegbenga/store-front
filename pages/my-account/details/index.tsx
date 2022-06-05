import React from 'react';
import { AiOutlineContacts } from 'react-icons/ai';
import { NextPageWithLayout } from '../../page';
import AccountLayout from '@/components/myaccount/AccountLayout';
const AccountDetails: NextPageWithLayout = () => {
  return (
    <div className="w-full p-8 bg-white h-fit ">
      <div className="grid gap-1 mb-10">
        <AiOutlineContacts className="text-5xl" />
        <h1 className="text-2xl font-semibold">MY DETAILS</h1>
        <p className="text-sm">
          Feel free to edit any of your details below so your KARA account is
          totally up to date.
        </p>
      </div>
      <div className="grid gap-5">
        <div>
          <h1 className="mb-2 text-sm font-semibold text-gray-500">
            FIRST NAME:
          </h1>
          <input
            className="w-full h-10 border border-black lg:w-80"
            type="name"
          />
        </div>
        <div>
          <h1 className="mb-2 text-sm font-semibold text-gray-500">
            LAST NAME:
          </h1>
          <input
            className="w-full h-10 border border-black lg:w-80"
            type="name"
          />
        </div>
        <div>
          <h1 className="mb-2 text-sm font-semibold text-gray-500">
            EMAIL ADDRESS:
          </h1>
          <input
            className="w-full h-10 border border-black lg:w-80"
            type="name"
          />
        </div>
        <div>
          <h1 className="mb-2 text-sm font-semibold text-gray-500">
            DATE OF BIRTH
          </h1>
          <input
            type="date"
            className="w-full h-10 border border-black lg:w-80"
          />
        </div>

        <button className="w-full h-12 mt-4 text-white bg-black border lg:w-80">
          Save Changes
        </button>
      </div>
    </div>
  );
};
AccountDetails.getLayout = (page) => {
  return <AccountLayout>{page}</AccountLayout>;
};

export default AccountDetails;
