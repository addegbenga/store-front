import { BiChevronRight } from 'react-icons/bi';

interface INavDirProps {}

const NavDir: React.FC<INavDirProps> = () => {
  return (
    <div className="bg-[#eeeeee] bg-opacity-30  border-black border-opacity-10 ">
      <div className="   container mx-auto flex items-center gap-2   relative z-20  py-2.5 px-4 text-sm">
        <div className="flex  text-black text-opacity-70 items-center gap-1">
          <p>Home</p>
          <BiChevronRight />
        </div>
        <div className="flex text-black text-opacity-70 items-center gap-1">
          <p>create Account</p>
          <BiChevronRight />
        </div>
        <div className="flex text-black text-opacity-70 items-center gap-1">
          <p>sales Top</p>
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default NavDir;
