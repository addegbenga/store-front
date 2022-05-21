import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
interface ITopNavProps {}
const TopNavbar: React.FC<ITopNavProps> = () => {
  return (
    <div>
      <div className="bg-[#2d2d2d] hidden md:block">
        <div className="container flex justify-between p-2 px-4 mx-auto 2xl:container md:px-10">
          <div className="flex gap-20 text-sm font-medium text-white">
            <Link href="/account/Login">Login</Link>
            {/* <h1 className="hidden md:block">Wishlist</h1> */}
            <div className="hidden font-medium md:block">
              <Link href="/wishlist">Wishlist(0)</Link>
            </div>

            <h1 className="hidden font-medium md:block">
              {' '}
              <Link href="/checkouts">Checkout</Link>
            </h1>
          </div>

          <div className="flex gap-2 text-sm text-white md:gap-12">
            <div className="flex items-center font-medium">
              <h1>USD</h1>
              <MdKeyboardArrowDown />
            </div>
            <div className="flex items-center font-medium">
              <h1>English</h1>
              <MdKeyboardArrowDown />
            </div>

            <h1 className="font-medium ">Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
