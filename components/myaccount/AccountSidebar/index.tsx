import React from 'react';
import Link from 'next/link';
import {
  AiFillAccountBook,
  AiOutlineContacts,
  AiOutlineMessage,
} from 'react-icons/ai';
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineOtherHouses,
  MdPayment,
} from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';

const data = [
  {
    name: 'Account overview',
    url: '/my-account',
    icon: <MdOutlineAccountBalanceWallet className="text-xl" />,
  },
  {
    name: 'My orders',
    url: '/my-account/orders',
    icon: <FiShoppingBag className="text-xl" />,
  },
  {
    name: 'My details',
    url: '/my-account/details',
    icon: <AiOutlineContacts className="text-xl" />,
  },
  {
    name: 'Address book',
    url: '/my-account/payment-method',
    icon: <MdOutlineOtherHouses className="text-xl" />,
  },
  {
    name: 'Payment Methods',
    url: '/my-account',
    icon: <MdPayment className="text-xl" />,
  },
  {
    name: 'Contact preferences',
    url: '/my-account',
    icon: <AiOutlineMessage className="text-xl" />,
  },
  {
    name: 'Social accounts',
    url: '/my-account',
    icon: <AiFillAccountBook className="text-xl" />,
  },
  {
    name: 'Sign outs',
    url: '/my-account',
    icon: <AiFillAccountBook className="text-xl" />,
  },
];
const AccountSidebar: React.FC = () => {
  return (
    <aside className="hidden w-full h-screen lg:block lg:w-fit ">
      <section className="grid w-full gap-1 border lg:w-80 ">
        <div className="flex items-center w-full gap-2 py-10 pr-10 bg-white shadow-lg">
          <div className="flex items-center justify-center w-24 h-24 bg-black rounded-full">
            <h1 className="text-2xl font-bold text-white">AG</h1>
          </div>
          <div>
            <h1>Hi,</h1>
            <p className="font-bold">Adeyemi Gbenga</p>
          </div>
        </div>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center w-full gap-4 p-4 bg-white shadow-md"
          >
            {item.icon}

            <h1 className="text-sm">
              <Link href={item.url}>{item.name}</Link>
            </h1>
          </div>
        ))}
      </section>
    </aside>
  );
};

export default AccountSidebar;
