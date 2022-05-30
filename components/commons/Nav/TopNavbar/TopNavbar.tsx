import Link from 'next/link';
import { useState } from 'react';
import { BsMinecart } from 'react-icons/bs';
import { FaUserAlt, FaRegHeart } from 'react-icons/fa';
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
              <div className="flex items-center font-medium">
                <FaUserAlt className="text-lg cursor-pointer" />
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
