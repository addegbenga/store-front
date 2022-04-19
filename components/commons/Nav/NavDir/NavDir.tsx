interface INavDirProps {}

const NavDir: React.FC<INavDirProps> = () => {
  return (
    <div className=" border-dashed  border-b border-[#b99d6b] border-opacity-30 text-gray-700 py-2 px-4 text-sm">
      Home &gt; create account{' '}
    </div>
  );
};

export default NavDir;
