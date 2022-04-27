interface INavDirProps {}

const NavDir: React.FC<INavDirProps> = () => {
  return (
    <div className="bg-[#b99d6b]">
      <div className=" border-dashed container mx-auto bg-[#b99d6b] relative z-20  border-b border-[#b99d6b] border-opacity-30 text-white py-2 px-4 text-sm">
        Home &gt; create account{' '}
      </div>
    </div>
  );
};

export default NavDir;
