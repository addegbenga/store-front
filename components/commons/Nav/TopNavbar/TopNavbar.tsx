import Link from 'next/link';
interface ITopNavProps {}
const TopNavbar: React.FC<ITopNavProps> = () => {
  return (
    <div>
      <div className="bg-[#b99d6b]">
        <div className="flex 2xl:container p-2 px-4 md:px-10 mx-auto justify-between">
          <div className="flex gap-6 text-white text-sm">
            <Link href="/">Links</Link>
            {/* <h1 className="hidden md:block">Wishlist</h1> */}
            <div className="hidden md:block">
              <Link href="/account/Login">Wishlist</Link>
            </div>

            <h1 className="hidden md:block">Checkout</h1>
          </div>

          <div className="flex text-sm text-white gap-3 md:gap-8">
            <h1>USD</h1>
            <h1>English</h1>
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
