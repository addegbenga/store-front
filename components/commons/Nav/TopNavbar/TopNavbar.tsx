import Link from 'next/link';
import { useState } from 'react';
import { BsMinecart } from 'react-icons/bs';
import {
  AiOutlineClose,
  AiOutlineMessage,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FaUserAlt, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import Cart from '@/components/commons/Cart/CartModal';
interface ITopNavProps {}
const TopNavbar: React.FC<ITopNavProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const data = [
    {
      name: 'Account overview',
      url: '/my-account',
      icon: <FaRegUser className="text-2xl" />,
    },
    {
      name: 'My orders',
      url: '/my-account/orders',
      icon: <FiShoppingBag className="text-2xl" />,
    },
    {
      name: 'Returns Information',
      url: '/my-account/details',
      icon: <AiOutlineQuestionCircle className="text-2xl" />,
    },
    {
      name: 'Contact Preferences',
      url: '/my-account/details',
      icon: <AiOutlineMessage className="text-2xl" />,
    },
  ];
  return (
    <>
      <Cart isOpen={isOpen} handleClose={handleClose} />
      <div>
        <div className="bg-[#2d2d2d] hidden md:block">
          <div className="container flex justify-between p-2 px-4 mx-auto 2xl:container md:px-10">
            <div className="flex text-xs text-white gap-14">
              <Link href="/account/Login">Login</Link>
              {/* <h1 className="hidden md:block">Wishlist</h1> */}

              <h1 className="hidden text-xs md:block">
                {' '}
                <Link href="/checkouts">Checkout</Link>
              </h1>
              <h1 className="hidden text-xs md:block">
                {' '}
                <Link href="/checkouts">About</Link>
              </h1>
              <h1 className="hidden text-xs md:block">
                {' '}
                <Link href="/checkouts">Delivery</Link>
              </h1>
            </div>

            <div className="flex gap-2 text-sm text-white md:gap-10">
              <div className="relative flex items-center font-medium group">
                <FaUserAlt className="text-lg cursor-pointer" />
                {/* start of account dropdown component refactor to it's own file */}
                <div className="absolute z-30 h-0 overflow-hidden transition-[height]  duration-300 ease-in-out delay-300 transform bg-white rounded-md shadow-md group-hover:h-72 -right-32 top-6 w-80">
                  <div className="flex items-center justify-between gap-2 p-3.5 text-black bg-gray-100">
                    <div className="flex gap-3">
                      <h1 className="font-semibold">Hi, Adeyemi</h1>
                      <span className="underline ">Sign Out</span>
                    </div>
                    <AiOutlineClose className="text-2xl cursor-pointer" />
                  </div>
                  <div className="mt-5">
                    {data.map((item, idx) => (
                      <div
                        className="flex items-center gap-3 px-5 font-normal text-black mb-7"
                        key={idx}
                      >
                        {item.icon}
                        <p className="text-sm">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* end of account dropdown component refactor to it's own file */}
              </div>

              <div className="flex items-center font-medium">
                <Link href="/wishlist" passHref={true}>
                  <FaRegHeart className="text-lg cursor-pointer" />
                </Link>
              </div>

              <div onClick={handleOpen} className="flex items-center gap-2">
                <BsMinecart className="text-lg cursor-pointer" />
                <p className="text-xs text-white text-opacity-80">
                  Your bag : 0.00
                </p>
              </div>
              {/* <h1 className="font-medium ">Cart</h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
