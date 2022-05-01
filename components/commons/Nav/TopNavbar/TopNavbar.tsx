import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
interface ITopNavProps {}
const TopNavbar: React.FC<ITopNavProps> = () => {
  return (
    <div>
      <div className="bg-[#2d2d2d] hidden md:block">
        <div className="flex container 2xl:container p-2 px-4 md:px-10 mx-auto justify-between">
          <div className="flex gap-20 font-medium text-white text-sm">
            <Link href="/">Login</Link>
            {/* <h1 className="hidden md:block">Wishlist</h1> */}
            <div className="hidden md:block  font-medium">
              <Link href="/account/Login">Wishlist(0)</Link>
            </div>

            <h1 className="hidden md:block  font-medium">Checkout</h1>
          </div>

          <div className="flex text-sm text-white gap-2 md:gap-12">
            <div className="flex items-center  font-medium">
              <h1>USD</h1>
              <MdKeyboardArrowDown />
            </div>
            <div className="flex items-center  font-medium">
              <h1>English</h1>
              <MdKeyboardArrowDown />
            </div>

            <h1 className=" font-medium">Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
