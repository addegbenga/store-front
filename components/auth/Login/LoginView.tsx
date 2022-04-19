import Image from 'next/image';
export interface ILoginProps {}

const LoginView: React.FC<ILoginProps> = () => {
  return (
    <div className=" flex ">
      <div className="w-full md:pr-10 mt-10 px-4">
        <div className="flex gap-2 items-center">
          <div className="w-1 h-6 md:h-9  bg-[#b99d6b]"></div>
          <h1 className="text-2xl md:text-4xl">Login Account</h1>
        </div>
        <p className="text-gray-400 pt-2">
          Get in touch and let us know how we can help.
        </p>
        <div className="my-20">
          <form className="grid gap-4">
            <div>
              <h1 className="text-sm mb-1.5">Email</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="text"
                name="email"
                placeholder="Your email*"
              />
            </div>
            <div>
              <h1 className="text-sm mb-1.5">Password</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="password"
                name="password"
                placeholder="Your password*"
              />
            </div>
            <button className="w-full bg-[#b99d6b] text-white text-center border-[#b99d6b] text-sm p-2 md:p-3 pl-3 text-left border md:w-2/6">
              LOGIN ACCOUNT
            </button>
            {/* <Button>CREATE ACCOUNT</Button> */}
          </form>
        </div>
      </div>
      <div className="w-full -mt-[2.3rem] hidden md:block  overflow-hidden">
        <Image
          objectPosition=" 20% 10%"
          src="/assets/registerbanner.jpg"
          height="100%"
          alt="banner"
          width="100%"
          layout="responsive"
        />
      </div>
    </div>
  );
};
export default LoginView;
