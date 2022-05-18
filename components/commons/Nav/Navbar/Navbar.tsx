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
        <div className="bg-white sticky top-0 md:top-9 w-full z-20  md:py-9 py-6  border-b border-black border-opacity-5">
          <div className="flex container 2xl:container px-4 mx-auto justify-between items-center">
            <Link passHref={true} href="/">
              <h1 className="font-bold cursor-pointer text-2xl ">KARA</h1>
            </Link>

            <div className="hidden text-medium  md:flex  gap-10 text-xs">
              <h1>SKINS</h1>
              <h1>FEATURES</h1>
              <h1>FASHION</h1>
              <h1>PAGES</h1>
              <h1>BUY VENEDOR</h1>
            </div>
            <div className="flex gap-6 items-center md:hidden ">
              <FaBars
                onClick={handleOpenModal}
                size={18}
                className="text-black text-opacity-70"
              />
              <AiOutlineSearch />
            </div>
            <div className="md:flex gap-2  items-center hidden ">
              <input
                className="bg-transparent border-b border-black text-sm outline-none placeholder-black"
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
