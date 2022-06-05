import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Sidebar from '../../Sidebar';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
interface INavProps {}

const Navbar: React.FC<INavProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <Sidebar handleCloseModal={handleCloseModal} isOpen={open} />

      <div>
        <div className="sticky top-0 z-20 w-full py-6 bg-white border-b border-black md:top-9 md:py-9 border-opacity-5">
          <div className="container flex items-center justify-between px-4 mx-auto 2xl:container">
            <Link passHref={true} href="/">
              <h1 className="text-2xl font-bold cursor-pointer ">KARA</h1>
            </Link>

            <div className="hidden gap-10 text-xs text-medium md:flex">
              <h1>SKINS</h1>
              <h1>FEATURES</h1>
              <h1>FASHION</h1>
              <h1>PAGES</h1>
              <h1>BUY VENEDOR</h1>
            </div>
            <div className="flex items-center gap-6 md:hidden ">
              <FaBars
                onClick={handleOpenModal}
                size={18}
                className="text-black text-opacity-70"
              />
              <AiOutlineSearch />
            </div>
            <div className="items-center hidden gap-2 md:flex ">
              <input
                className="text-sm placeholder-black bg-transparent border-b border-black outline-none"
                type="text"
                placeholder="Search our store"
              />
              <AiOutlineSearch size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
