import React from 'react';
import Link from 'next/link';
import { AiFillAccountBook } from 'react-icons/ai';

const data = [
  {
    name: 'Account overview',
    url: '/my-account',
    icon: <AiFillAccountBook className="text-xl" />,
  },
  {
    name: 'My orders',
    url: '/my-account/orders',
    icon: <AiFillAccountBook className="text-xl" />,
  },
  {
    name: 'My details',
    url: '/my-account/details',
    icon: <AiFillAccountBook className="text-xl" />,
  },
  {
    name: 'Address book',
    url: '/my-account/payment',
    icon: <AiFillAccountBook className="text-xl" />,
  },
  {
    name: 'Payment Methods',
    url: '/my-account',
    icon: <AiFillAccountBook className="text-xl" />,
  },
];
const AccountSidebar: React.FC = () => {
  return (
    <aside className="h-screen ">
      <section className="grid gap-1 border w-80">
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
