import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Sidebar from '../../Sidebar';
import { AiOutlineSearch } from 'react-icons/ai';
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
        <div className="bg-white  md:py-12 py-6  border-b border-black border-opacity-5">
          <div className="flex 2xl:container px-4 mx-auto justify-between items-center">
            <h1 className="font-bold">ASOS</h1>
            <div className="hidden md:flex  gap-10 text-xs">
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
            <div className="md:flex gap-2 items-center hidden ">
              <input
                className="bg-transparent text-sm outline-none placeholder-black"
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
