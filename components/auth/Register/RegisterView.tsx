import Image from 'next/image';
import Link from 'next/link';
interface IRegisterProps {}

const RegisterView: React.FC<IRegisterProps> = () => {
  return (
    <div className=" flex container mx-auto ">
      <div className="w-full  mt-10 px-4">
        <div className="flex gap-2 items-center">
          <div className="w-1 h-6 md:h-9  bg-[#b99d6b]"></div>
          <h1 className="text-2xl md:text-4xl">Create Account</h1>
        </div>
        <p className="text-gray-400 pt-2">
          Get in touch and let us know how we can help.
        </p>
        <div className="py-16">
          <form className="grid gap-4">
            <div>
              <h1 className="text-sm mb-1.5">FullName</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="text"
                name="firstname"
                placeholder="First Name"
              />
            </div>

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

            <button className="w-full bg-[#b99d6b] text-white text-center border-[#b99d6b] text-sm p-2 md:p-3 pl-3 text-left border ">
              CREATE ACCOUNT
            </button>

            {/* <Button>CREATE ACCOUNT</Button> */}
            <p className=" text-center">or</p>
            <div className="flex gap-3 justify-center">
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/ForgotPassword">Forgot Password</Link>
              </p>{' '}
              <span className="text-[#b99d6b]">/</span>
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/Login">Login Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full  hidden md:block  ">
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
export default RegisterView;
