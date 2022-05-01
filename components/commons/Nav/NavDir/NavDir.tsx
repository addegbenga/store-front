import { BiChevronRight } from 'react-icons/bi';

interface INavDirProps {}

const NavDir: React.FC<INavDirProps> = () => {
  return (
    <div className="bg-[#eeeeee] border-y border-black border-opacity-10 ">
      <div className="  container mx-auto flex items-center gap-4   relative z-20  text-black py-2 px-4 text-sm">
        <div className="flex items-center gap-2">
          <p>Home</p>
          <BiChevronRight />
        </div>
        <div className="flex items-center gap-2">
          <p>Create Account</p>
          <BiChevronRight />
        </div>
        <div className="flex items-center gap-2">
          <p>Sales Top</p>
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default NavDir;
